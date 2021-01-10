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


class ModuleMaster(Base):
    __tablename__ = 'sen_module_master'
    id = Column(Integer, primary_key=True)
    smm_module_name = Column(Text)
    smm_module_state = Column(
        Boolean(name='state_bool'), default=True, nullable=False)
    smm_created_by = Column(Text)
    smm_created_time = Column(DateTime, default=datetime.datetime.utcnow)

    def __init__(self, module_name, created_by):
        self.smm_module_name = module_name
        self.smm_created_by = created_by

    @classmethod
    def get_ActiveModuleList(cls, DBSession):
        return DBSession.query(ModuleMaster).filter_by(smm_module_state=True).first()


# This Txn Activity Master Table is to ensure
# The list of activities that can be performed in this list of applications.
# For Eg. Input Pull / Logic Process / Out put Generate

class TxnActivityMaster(Base):
    __tablename__ = 'sen_act_master'
    id = Column(Integer, primary_key=True)
    sam_activity_name = Column(Text)
    sam_created_by = Column(Text)
    sam_created_time = Column(DateTime, default=datetime.datetime.utcnow)

    def __init__(self, activity_name, created_by):
        self.sam_activity_name = activity_name
        self.sam_created_by = created_by

    @classmethod
    def get_ActivityList(cls, DBSession):
        return DBSession.query(TxnActivityMaster).all()


class TxnActivityAudit(Base):
    __tablename__ = 'sen_act_audit'
    saa_audit_id = Column(Integer, primary_key=True)
    saa_activity_id = Column(Integer)
    saa_action_log = Column(Text)
    saa_created_by = Column(Text)
    saa_created_time = Column(DateTime, default=datetime.datetime.utcnow)

    def __init__(self, activity_name, created_by):
        self.saa_activity_name = activity_name
        self.saa_created_by = created_by

    @classmethod
    def get_ActivityAuctionList(cls, DBSession):
        return DBSession.query(TxnActivityAudit).all()
