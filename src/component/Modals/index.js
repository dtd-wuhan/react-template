import { useSelector, useDispatch } from 'react-redux'
import { getModal } from '../../selectors'
import { MODAL_EDIT, MODAL_ADD, MODAL_NULL } from '../../const/modal.const'
import AddModal from './add'
import EditModal from './edit'


const IndexModal = () => {
    const { modalType } = useSelector(getModal)

    switch (modalType) {
        case MODAL_ADD:
            return <AddModal />;
        case MODAL_EDIT:
            return <EditModal />;
        case MODAL_NULL:
            return null
        default:
            return null
    }
}

export default IndexModal