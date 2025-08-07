from pydantic import BaseModel

# ----------------------------------
# POST SCHEMAS
# ----------------------------------

class PostBase(BaseModel):
    title: str
    content: str

class PostCreate(PostBase):
    pass

class Post(PostBase):
    id: int

    class Config:
        from_attributes = True  # ✅ For Pydantic v2 compatibility


# ----------------------------------
# COMMENT SCHEMAS
# ----------------------------------

class CommentBase(BaseModel):
    content: str

class CommentCreate(CommentBase):
    pass

class Comment(CommentBase):
    id: int
    post_id: int

    class Config:
        from_attributes = True
