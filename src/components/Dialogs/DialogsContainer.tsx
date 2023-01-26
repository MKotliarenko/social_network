import React, {ChangeEvent, ComponentType} from 'react';
import {addMassageAC, changeInputDialogAC} from '../../Redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";
import {AppDispatch, RootStateTypeForConnect} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state: RootStateTypeForConnect) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        massagesData: state.dialogsPage.massagesData,
        newMassageText: state.dialogsPage.newMassageText,
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


export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);
