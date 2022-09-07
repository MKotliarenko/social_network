import React, {ChangeEvent} from 'react';
import {addMassageAC, changeInputDialogAC} from '../../Redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";
import {AppDispatch, RootStateTypeForConnect} from "../../Redux/redux-store";
import {connect} from "react-redux";


const mapStateToProps = (state: RootStateTypeForConnect) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        massagesData: state.dialogsPage.massagesData,
        newMassageText: state.dialogsPage.newMassageText,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeInputMassage: (newText: string) => {
            dispatch(changeInputDialogAC(newText))
        },
        addMessage: (newMassageText: string) => {
            dispatch(addMassageAC(newMassageText))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
