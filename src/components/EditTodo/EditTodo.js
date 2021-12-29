import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const EditTodo = ({onUpdateTodo,todo, index}) => {
    const [title, setTitle] = useState(todo.title);
    const [status, setStatus] = useState(todo.status)
    const updateTodo = () => {
        if(title !== ''){
            const todo = {
                title: title,
                status: status
            }
            onUpdateTodo(index,todo);
        }
    }
    return (
        <InputGroup className="mb-3">
        <FormControl
            placeholder="Write your todo..."
            aria-label="Write Your Todo..."
            aria-describedby="basic-addon2"
            value={title}
            onChange={(e => setTitle(e.target.value))}
            style={{width: '300px'}}
        />
        &nbsp; &nbsp;
        
        <select name="status" id="status" value={status} onChange={(e => setStatus(e.target.value))}>
            <option value="pending">pending</option>
            <option value="done">done</option>
        </select>

        &nbsp; &nbsp;

        <Button onClick={updateTodo} variant="success" id="button-addon2">
            <FontAwesomeIcon icon={faCheckCircle} /> Save
        </Button>
    </InputGroup>
    );
};

export default EditTodo;