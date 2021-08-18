import { noteData } from './firebaseConnect';
var redux = require('redux');

//Init State
const noteInitialState = {
    testConnect: 'test thôi',
    isEdit: false,
    editItem: {},
    isAdd: false,
    alertShow: false,
    alertContent: '',
    alertType: ''
}

//Định nghĩa reducer quản lý các action
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("Kết nối thành công với addData, biến nhận vào là: " + action.getItem);
            noteData.push(action.getItem);
            console.log("Thêm dữ liệu " + JSON.stringify(action.getItem) + " thành công!");
            return state
        case "CHANGE_EDIT_STATUS":
            //Trả về đối tượng state được ghi đè với giá trị thuộc tính isEdit bị phủ định
            return { ...state, isEdit: !state.isEdit }
        case "CHANGE_ADD_STATUS":
            return { ...state, isAdd: !state.isAdd }
        case "GET_EDIT_DATA":
            //Lấy giá trị editObject cập nhật trong state
            return { ...state, editItem: action.editObject }
        case "EDIT":
            //Update data tren firebase
            console.log("Dữ liệu cần sửa mà Store nhận được là: " + JSON.stringify(action.getItem));
            noteData.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
            console.log("Đã cập nhật dữ liệu thành công!");
            return { ...state, editItem: {} }
        case "DELETE":
            noteData.child(action.deleteId).remove();
            return state
        case "ALERT_ON":
            return { ...state, alertShow: true, alertContent: action.alertContent, alertType: action.alertType }
        case "ALERT_OFF":
            return { ...state, alertShow: false }
        default:
            return state
    }
}

//Khởi tạo store quản lý reducer ở trên
var store = redux.createStore(allReducer);

//Theo dõi sự thay đổi của store
store.subscribe(function () {
    console.log("noteInitialState:" + JSON.stringify(store.getState()));
})

//export để sử dụng
export default store;