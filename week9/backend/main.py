from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from uuid import uuid4

app = FastAPI()

# CORS for local frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory "DB"
posts = []
comments = {}

class Post(BaseModel):
    id: int
    title: str
    content: str

class CreatePost(BaseModel):
    title: str
    content: str

class Comment(BaseModel):
    id: str
    post_id: int
    content: str

class CreateComment(BaseModel):
    content: str

@app.get("/posts", response_model=List[Post])
def get_posts():
    return posts

@app.post("/posts", response_model=Post)
def add_post(post: CreatePost):
    new_post = Post(id=len(posts) + 1, **post.dict())
    posts.append(new_post)
    return new_post

@app.get("/posts/{post_id}", response_model=Post)
def get_post(post_id: int):
    for post in posts:
        if post.id == post_id:
            return post
    raise HTTPException(status_code=404, detail="Post not found")

@app.delete("/posts/{post_id}")
def delete_post(post_id: int):
    global posts
    posts = [p for p in posts if p.id != post_id]
    return {"message": "Post deleted"}

@app.get("/posts/{post_id}/comments", response_model=List[Comment])
def get_comments(post_id: int):
    return comments.get(post_id, [])

@app.post("/posts/{post_id}/comments", response_model=Comment)
def add_comment(post_id: int, comment: CreateComment):
    new_comment = Comment(id=str(uuid4()), post_id=post_id, content=comment.content)
    if post_id not in comments:
        comments[post_id] = []
    comments[post_id].append(new_comment)
    return new_comment
