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

    def __init__(self, login, name, role, title, designation, status):
        self.login = slum_login
        self.name = slum_name
        self.role = slum_role
        self.title = slum_title
        self.designation = slum_designation
        self.status = slum_status

    def set_password(self, password):
        self.password = _sha512(password)

    def check_password(self, password):
        return self.password == _sha512(password)

    @classmethod
    def by_login(cls, DBSession, login):
        return DBSession.query(UserLoginMaster).filter_by(login=login).first()

    @classmethod
    def get_vo_users(cls, DBSession):
        return DBSession.query(UserMaster).filter_by(role=1).all()


def _sha512(text):
    sha = hashlib.sha512()
    sha.update(six.b(text))
    return sha.hexdigest()