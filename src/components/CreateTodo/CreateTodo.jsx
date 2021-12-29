import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const CreateTodo = ({onCreateTodo}) => {
    const [title, setTitle] = useState('');
    const createTodo = () => {
        if(title !== ''){
            const todo = {
                title: title,
                status: 'pending'
            }
            onCreateTodo(todo);
            setTitle('');
        }
    }
    const handleEventKeyboard = (e) => {
        if(e.key === 'Enter'){
            createTodo();
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
                onKeyPress={(e) => handleEventKeyboard(e)}
            />
            <Button onClick={createTodo} variant="info" id="button-addon2">
                <FontAwesomeIcon icon={faPlusCircle} /> New
            </Button>
        </InputGroup>
    );
};

export default CreateTodo;