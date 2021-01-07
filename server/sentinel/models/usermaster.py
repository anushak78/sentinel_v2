from sqlalchemy import (
    Column,
    Integer,
    Text,
    ForeignKey,
)
import hashlib
import six
from .meta import Base


class UserMaster(Base):
    __tablename__ = 'sen_user_master'
    id = Column(Integer, primary_key=True)
    sum_name = Column(Text)
    sum_login = Column(Text)
    sum_role = Column(Integer)
    sum_title = Column(Integer)
    sum_designation = Column(Text)
    sum_status = Column(Text)

    def __init__(self, name, login, role, title, designation, status):
        self.sum_name = name
        self.sum_login = login
        self.sum_role = role
        self.sum_title = title
        self.sum_designation = designation
        self.sum_status = status

    @classmethod
    def get_users(cls, DBSession):
        return DBSession.query(UserMaster).all()


class UserLoginMaster(Base):
    __tablename__ = 'sen_login_user_master'
    id = Column(Integer, primary_key=True)
    slum_login = Column(Text)
    slum_password = Column(Text)
    slum_name = Column(Text)
    slum_role = Column(Integer)
    slum_title = Column(Integer)
    slum_designation = Column(Text)
    slum_status = Column(Text)

    def __init__(self, login, password, name, role, title, designation, status):
        self.slum_login = login
        self.set_password(password)
        self.slum_name = name
        self.slum_role = role
        self.slum_title = title
        self.slum_designation = designation
        self.slum_status = status

    def set_password(self, password):
        self.slum_password = _sha512(password)

    def check_password(self, password):
        return self.slum_password == _sha512(password)

    @classmethod
    def by_login(cls, DBSession, login):
        return DBSession.query(UserLoginMaster).filter_by(slum_login=login).first()

    @classmethod
    def get_vo_users(cls, DBSession):
        return DBSession.query(UserMaster).filter_by(slum_role=1).all()


def _sha512(text):
    sha = hashlib.sha512()
    sha.update(six.b(text))
    return sha.hexdigest()
