# backend/routes/post.py

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from backend.schemas import PostCreate, Post, CommentCreate, Comment
from backend.crud import create_post, get_posts, get_post, add_comment, get_comments_for_post, upvote_post
from backend.database import get_db

router = APIRouter()


@router.get("/posts", response_model=list[Post])
def read_posts(db: Session = Depends(get_db)):
    return get_posts(db)


@router.get("/posts/{post_id}", response_model=Post)
def read_post(post_id: int, db: Session = Depends(get_db)):
    db_post = get_post(db, post_id)
    if db_post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return db_post


@router.post("/posts", response_model=Post)
def create_post_endpoint(post: PostCreate, db: Session = Depends(get_db)):
    return create_post(db, post)


@router.post("/posts/{post_id}/comments", response_model=Comment)
def create_comment_endpoint(post_id: int, comment: CommentCreate, db: Session = Depends(get_db)):
    return add_comment(db, post_id, comment.content)


@router.get("/posts/{post_id}/comments", response_model=list[Comment])
def get_comments(post_id: int, db: Session = Depends(get_db)):
    return get_comments_for_post(db, post_id)


@router.post("/posts/{post_id}/vote")
def vote_post(post_id: int, db: Session = Depends(get_db)):
    return upvote_post(db, post_id)
