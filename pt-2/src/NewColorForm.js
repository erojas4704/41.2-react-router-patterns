import { useState } from "react";
import { Redirect } from "react-router-dom";

const NewColorForm = ({addNewColor}) => {
    const [form, setForm] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        addNewColor(form.color.toLowerCase());
        setSubmitted(true);
    };
    
    return (
        <form className="NewColorForm" onChange={handleChange} onSubmit={handleSubmit}>
            {submitted && <Redirect to="/colors" />}
            <h3>Add New Color</h3>
            <label htmlFor="color">Color:</label>
            <input type="text" name="color" id="color" placeholder="color"/>
            <button type="submit">Add</button>
        </form>
    );
}

export default NewColorForm;