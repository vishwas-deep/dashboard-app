import {GridColDef} from "@mui/x-data-grid";
import "./addData.scss";
// import {useMutation, useQueryClient} from "@tanstack/react-query";

type Props = {
    slug: string;
    columns: GridColDef[];
    updateOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddData = (props: Props) => {
    // const queryClient = useQueryClient();

    // const mutation = useMutation({
    //     mutationFn: () => {
    //         return fetch(`http://localhost:8800/api/${props.slug}s`, {
    //             method: "post",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 id: 111,
    //                 img: "",
    //                 lastName: "Hello",
    //                 firstName: "Test",
    //                 email: "testme@gmail.com",
    //                 phone: "123 456 789",
    //                 createdAt: "01.02.2023",
    //                 verified: true,
    //             }),
    //         });
    //     },
    //     onSuccess: () => {
    //         queryClient.invalidateQueries([`all${props.slug}s`]);
    //     },
    // });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // add new item
        // axios.post(`/api/${slug}s`, {})
        // mutation.mutate();
        props.updateOpen(false);
    };

    return (
        <div className='addData'>
            <div className='addData__modal'>
                <span
                    className='addData__modal__close'
                    onClick={() => props?.updateOpen(false)}
                >
                    X
                </span>
                <h1>Add new {props.slug}</h1>
                <form action='' onSubmit={handleSubmit}>
                    {props?.columns
                        .filter(
                            (item) =>
                                item.field !== "img" && item.field !== "id"
                        )
                        .map((column) => {
                            return (
                                <div className='item'>
                                    <label>{column.headerName}</label>
                                    <input
                                        type={column.type}
                                        placeholder={column.field}
                                    />
                                </div>
                            );
                        })}
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};

export default AddData;
