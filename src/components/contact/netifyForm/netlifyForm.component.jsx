import React, { useRef, useState } from 'react';

import Button from '../../button/button.component';

import './netlifyForm.scss';

const NetlifyForm = () => {

    //** states for form styles **//
    const [ formState , setFormState ] = useState({
        netlifyRes: null
    });

    const setFormStateFn = ( formSubItem, newState ) => {
        setFormState( oldStates => ({
            ...oldStates,
            [ formSubItem ]: newState
        }));
    }

    //** managing inputs **//

    const nameInputRef = useRef('');
    const emailInputRef = useRef('');
    const messageInputRef = useRef('');
    const honeypot = useRef('');

    const encodeForNetlify = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formObj = {
            "form-name": event.target.getAttribute("name"),
            "name": nameInputRef.current.value,
            "email": emailInputRef.current.value,
            "message": messageInputRef.current.value,
            "date": new Date()
        };
        
        if( honeypot.current.value !== '' ){
            formObj["honeypot"] = honeypot.current.value;
        } 
        
        console.log(formObj);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encodeForNetlify(formObj)
        })
            .then( res => {
                res.ok ? 
                    setFormStateFn('netlifyRes', true):
                    setFormStateFn('netlifyRes', false);
            })
            .catch( _ => {
                setFormStateFn('netlifyRes', false);
            });
    };

    return (
        <div className={ `netlifyFormComponent` }>
            <h3 className={ `subtitle` }>
                Contact From
            </h3>
            <div 
                className={[ 
                    `formWrapper`, 
                    formState.netlifyRes !== null ? 'formDone' : null,
                ].join(' ')}
            >
                <div className={`netlifyRes`}>
                    {
                        formState.netlifyRes === true ? 
                        <div className={`successful`}>
                            your message has been reserved
                        </div>
                        : null
                    }
                    {
                        formState.netlifyRes === false ? 
                        <div className={ `error` }>
                            <p>
                                something went wrong,
                                you can contact me on this email address
                                <b> contact@amir4rab.com</b>
                            </p>
                        </div>
                        : null
                    }
                </div>
                <form 
                    name="contact-v1.10" 
                    method="post" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    data-netlify-recaptcha="true"
                >
                    <input type="hidden" name="form-name" value="contact-v1.10" />
                    <p hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field" ref={honeypot} />
                        </label>
                    </p>
                    <p hidden>
                        <label>
                            Date <input name="date" type="date" />
                        </label>
                    </p>
                    <div className={ `inputGroup` }>
                        <label>
                            <p>Your Name</p>
                            <input 
                                ref={nameInputRef} 
                                type="text" 
                                name="name"
                                required={ true }
                            />
                        </label>
                    </div>
                    <div className={ `inputGroup` }>
                        <label>
                            <p>Your Email</p>
                            <input 
                                ref={emailInputRef} 
                                type="email" 
                                name="email"
                                required={ true }
                            />
                        </label>
                    </div>
                    <div className={ `inputGroup` }>
                        <label>
                            <p>Message</p>
                            <textarea 
                                name="message"
                                ref={ messageInputRef }
                                required={ true }
                            ></textarea>
                        </label>
                    </div>
                    <div className={ `inputGroup` }>
                        <Button type="submit">
                            send
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NetlifyForm;
