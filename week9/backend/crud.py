# backend/crud.py
from sqlalchemy.orm import Session
from backend import models, schemas


def get_posts(db: Session):
    return db.query(models.Post).all()

def get_post(db: Session, post_id: int):
    return db.query(models.Post).filter(models.Post.id == post_id).first()

def create_post(db: Session, post: schemas.PostCreate):
    db_post = models.Post(title=post.title, content=post.content)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

def add_comment(db: Session, post_id: int, content: str):
    db_comment = models.Comment(post_id=post_id, content=content)
    db.add(db_comment)
    db.commit()
    db.refresh(db_comment)
    return db_comment

def get_comments_for_post(db: Session, post_id: int):
    return db.query(models.Comment).filter(models.Comment.post_id == post_id).all()

def upvote_post(db: Session, post_id: int):
    db_vote = models.Vote(post_id=post_id)
    db.add(db_vote)
    db.commit()
    db.refresh(db_vote)
    return db_vote
