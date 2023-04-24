import React, {ReactNode} from 'react';
import s from './Contacts.module.scss'
import {Title} from "../title/Title";
import {Slide} from "react-awesome-reveal";
import {SubmitHandler, useForm} from "react-hook-form";
import emailjs from '@emailjs/browser';
import {notification} from 'antd';
import {
    CheckCircleTwoTone,
    CloseCircleTwoTone
} from '@ant-design/icons';

type FormDataType = {
    name: string
    email: string
    suggestions: string
}
export const Contacts = () => {
    const [api, contextHolder] = notification.useNotification()

    const { register, reset, handleSubmit, formState: {errors}} = useForm<FormDataType>({
        defaultValues: {
            name: '',
            email: '',
            suggestions: ''
        }
    })

    const onSubmit: SubmitHandler<FormDataType> = async (data) => {
        try {
            await emailjs.send('service_9eaa1rq','template_3toyaol', data, 'eoBbsXtu7NLtaaJOH')
            openNotification('Message delivered','Your message was sent successfully, thank you.', <CheckCircleTwoTone twoToneColor="#ffb400" /> )
            reset()
        }
        catch (e) {
            openNotification('Message not delivered','Your message was unable to send.', <CloseCircleTwoTone twoToneColor="#eb2f96" /> )
        }
    }
    const openNotification = (message: string, description: string, icon: ReactNode) => {
        api.open({
            message: <span> {icon} {message}</span>,
            description,
            duration: 4,
        });
    };
    return (
        <div id='contacts' className={s.contactsWrapper}>
            <div className={s.container}>
                {contextHolder}
                <Title text='get in' assignedText='touch'/>
                <Slide>
                    <form className={s.contactsForm} onSubmit={handleSubmit(onSubmit)}>
                        <label className={s.label} htmlFor="name">Your name:</label>
                        <input id='name' type="text"
                               className={s.itemForm} {...register("name", {required: 'The field is required'})}/>
                        <p style={{fontSize: '13px', color: '#da2f4c'}}>{errors.name?.message}</p>

                        <label className={s.label} htmlFor="email">Your email:</label>
                        <input id='email' type="text" className={s.itemForm} {...register("email", {
                            required: 'The field is required', pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        })}/>
                        <p style={{fontSize: '13px', color: '#da2f4c'}}>{errors.email?.message}</p>

                        <label className={s.label} htmlFor="suggest">Your suggestions:</label>
                        <textarea id="suggest" className={s.itemForm} {...register("suggestions", {required: 'The field is required', minLength: { value: 5, message: 'The minimum number of characters is 5'}})} />
                        <p style={{fontSize: '13px', color: '#da2f4c'}}>{errors.suggestions?.message}</p>

                        <button type='submit' className={s.btn}>Send</button>
                    </form>
                </Slide>
            </div>
        </div>
    );
};

