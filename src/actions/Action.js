export const SAVE_SUCCESS = "SAVE_SUCCESS";
export const SAVE_FINRECORDID = "SAVE_FINRECORDID";

export const saveSuccess = (successObj) => {
  console.log("in Save Success action");
  return {
    type: SAVE_SUCCESS,
    param: successObj,
  };
};

export const saveFinRecordId = (finRecordId) => {
  console.log("in Save Display action");
  return {
    type: SAVE_FINRECORDID,
    param: finRecordId,
  };
};
