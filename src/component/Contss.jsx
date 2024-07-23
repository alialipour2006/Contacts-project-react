import Lilist from "./Lilist"

export default function Contss({ Items, delete1, edit }) {
    return (
        <>
            <div className="gradient-custom" >
                <ul className="ul-context ">
                    {Items.map(item => {
                        return (
                            <Lilist
                                item={item}
                                delete1={delete1}
                                edit={edit} />
                        )
                    })}
                </ul>
            </div>
        </>
    )
}