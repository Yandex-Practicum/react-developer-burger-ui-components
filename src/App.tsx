import './styles.css';
import React, { useCallback, useRef, useState } from 'react';
import { Button, Logo, ConstructorElement, Tab, Input } from './ui';
import {
    CurrencyIcon,
    BurgerIcon,
    LockIcon,
    DragIcon,
    CloseIcon,
    ListIcon,
    ProfileIcon,
    EditIcon,
    InfoIcon,
    ShowIcon,
    HideIcon,
    LogoutIcon,
    CheckMarkIcon,
} from './ui/icons';
import { Counter } from './ui/counter';
import { PasswordInput } from './ui/password-input';
import { EmailInput } from './ui/email-input';

const Inputs = () => {
    const [form, setValues] = useState({ email: '', password: '' });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValues({ ...form, [e.target.name]: e.target.value });

    return (
        <div>
            <h2>Поля ввода</h2>
            <div className={'mb-2'}>
                <EmailInput value={form.email} onChange={onChange} name={'email'} />
            </div>
            <div className={'mb-2'}>
                <PasswordInput value={form.password} onChange={onChange} name={'password'} />
            </div>
            <div className={'mb-2'}>
                <EmailInput value={form.email} onChange={onChange} name={'email'} size="small" />
            </div>
            <div className={'mb-2'}>
                <PasswordInput
                    value={form.password}
                    onChange={onChange}
                    name={'password'}
                    size="small"
                />
            </div>
        </div>
    );
};

export default function App() {
    return (
        <div className="App p-4">
            <Logo />
            <h1>Welcome</h1>
            <h2>Кнопки</h2>
            <Button type="secondary">Кнопка</Button>
            <Button type="primary">Кнопка</Button>
            <Button type="primary" size="large">
                Кнопка
            </Button>
            <Button type="primary" size="small">
                Кнопка
            </Button>
            <h2>Иконки</h2>
            <div>
                <CurrencyIcon type="primary" />
                <BurgerIcon type="primary" />
                <LockIcon type="primary" />
                <DragIcon type="primary" />
                <CloseIcon type="primary" />
                <CheckMarkIcon type="primary" />
                <ListIcon type="primary" />
                <ProfileIcon type="primary" />
                <EditIcon type="primary" />
                <InfoIcon type="primary" />
                <ShowIcon type="primary" />
                <HideIcon type="primary" />
                <LogoutIcon type="primary" />
            </div>
            <div>
                <CurrencyIcon type="secondary" />
                <BurgerIcon type="secondary" />
                <LockIcon type="secondary" />
                <DragIcon type="secondary" />
                <CloseIcon type="secondary" />
                <CheckMarkIcon type="secondary" />
                <ListIcon type="secondary" />
                <ProfileIcon type="secondary" />
                <EditIcon type="secondary" />
                <InfoIcon type="secondary" />
                <ShowIcon type="secondary" />
                <HideIcon type="secondary" />
                <LogoutIcon type="secondary" />
            </div>
            <div>
                <CurrencyIcon type="error" />
                <BurgerIcon type="error" />
                <LockIcon type="error" />
                <DragIcon type="error" />
                <CloseIcon type="error" />
                <CheckMarkIcon type="error" />
                <ListIcon type="error" />
                <ProfileIcon type="error" />
                <EditIcon type="error" />
                <InfoIcon type="error" />
                <ShowIcon type="error" />
                <HideIcon type="error" />
                <LogoutIcon type="error" />
            </div>
            <div>
                <CurrencyIcon type="success" />
                <BurgerIcon type="success" />
                <LockIcon type="success" />
                <DragIcon type="success" />
                <CloseIcon type="success" />
                <CheckMarkIcon type="success" />
                <ListIcon type="success" />
                <ProfileIcon type="success" />
                <EditIcon type="success" />
                <InfoIcon type="success" />
                <ShowIcon type="success" />
                <HideIcon type="success" />
                <LogoutIcon type="success" />
            </div>
            <div style={{ position: 'relative', margin: '0 auto', width: '32px', height: '32px' }}>
                <Counter count={1} />
            </div>
            <h2>Конструктор</h2>
            <ConstructorElement
                text="Краторная булка N-200i (верх)"
                thumbnail="https://img-fotki.yandex.ru/get/9/orlando56.a/0_6e47_375ad918_XL"
                price={20}
            />
            <ConstructorElement
                type="top"
                text="Соус Spicy-X"
                price={320}
                thumbnail="https://img-fotki.yandex.ru/get/9/orlando56.a/0_6e47_375ad918_XL"
                isLocked
            />
            <ConstructorElement
                type="bottom"
                text="Краторная булка N-200i (верх)"
                thumbnail="https://img-fotki.yandex.ru/get/9/orlando56.a/0_6e47_375ad918_XL"
                price={30}
            />

            <div>
                <h2>Типографика</h2>
                <p>Определяется через CSS-классы</p>
                <div style={{ textAlign: 'left', border: '2px dashed white' }} className="p-4">
                    <h2 className="text text_type_main-large">
                        Это большой заголовок, написанный основным шрифтом
                    </h2>
                    <h3 className="text text_type_main-medium">
                        Этот текст для заголовков поменьше
                    </h3>
                    <p className="text text_type_main-default">
                        Это текст, используемый по-умолчанию
                    </p>
                    <h1 className="text text_type_digits-large">1234567890</h1>
                    <p className="text text_type_digits-default">1234567890</p>
                </div>
            </div>
            <div>
                <h2>Табы</h2>
                <ul style={{ display: 'flex', listStyle: 'none', padding: '0' }}>
                    <li className="mr-2">
                        <Tab type="current" text="Вкладка" />
                    </li>
                    <li>
                        <Tab text="Другая вкладка" handleClick={() => alert('I 🖤 Burgers!')} />
                    </li>
                </ul>
            </div>
            <Inputs />
        </div>
    );
}
