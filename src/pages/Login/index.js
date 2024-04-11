
import bg from '../../assest/login.webm'
import style from './index.module.less'

const login = () => {
    return (
        <div className={style.container}>
            <video src={bg} autoPlay muted loop controls={false} />
        </div>
    )
}

export default login