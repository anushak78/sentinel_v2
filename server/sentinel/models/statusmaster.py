from sqlalchemy import (
    Column,
    Integer,
    Text,
    ForeignKey,
    DateTime,
    Boolean
)
import hashlib
import six
from .meta import Base
import datetime

# Module Master , has the list of modules to be enabled .


class CaseStatusMaster(Base):
    __tablename__ = 'sen_case_status_master'
    id = Column(Integer, primary_key=True)
    scsm_status_name = Column(Text)
    scsm_created_by = Column(Text)
    scsm_created_time = Column(DateTime, default=datetime.datetime.utcnow)

    def __init__(self, status_name, created_by):
        self.scsm_status_name = status_name
        self.scsm_created_by = created_by

    @classmethod
    def get_StatusList(cls, DBSession):
        return DBSession.query(CaseStatusMaster).first()
