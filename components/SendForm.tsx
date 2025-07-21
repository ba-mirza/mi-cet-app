"use client"

import {InputText} from "primereact/inputtext";
import {InputMask} from "primereact/inputmask";
import {RadioButton} from "primereact/radiobutton";
import {Button} from "primereact/button";
import axios from "axios";
import {useState} from "react";

export default function SendForm() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="w-[550px] border border-[#343434] rounded-lg px-2 py-3 backdrop-blur-md bg-white/50 text-center">
                <h1 className="section-text text-2xl font-bold">Получить консультацию</h1>
            </div>

            <div className="flex justify-center items-center border border-[#343434] rounded-lg p-10 backdrop-blur-md bg-white/50 w-full max-w-[1200px] mt-4">
                <div>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);

                        const firstname = formData.get("firstname");
                        const lastname = formData.get("lastname");
                        const phone = formData.get("phone");

                        console.log(firstname, lastname, `+7${phone}`);
                        setLoading(false);

                        // try {
                        //     setLoading(true);
                        //     const res = await axios.post("/api/form", {firstname, lastname, phone});
                        //
                        //     if(res.status === 200) {
                        //         setStatus("Заявка успешно отправлена");
                        //     } else {
                        //         setStatus('Ошибка при отправке: ' + res.statusText);
                        //     }
                        // } catch (error) {
                        //     console.error('Ошибка отправки:', error);
                        //     setStatus('Ошибка при отправке');
                        // } finally {
                        //     setLoading(false);
                        // }
                    }}>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <InputText name="firstname" className="p-inputtext-lg w-full md:w-auto" placeholder="Имя" />
                            <InputText name="lastname" className="p-inputtext-lg w-full md:w-auto" placeholder="Фамилия" />
                            <div className="flex items-center w-full md:w-auto">
                                <InputText className="p-inputtext-lg w-15" disabled value="+7" />
                                <InputMask name="phone"
                                           style={{marginLeft: 10}}
                                           className="p-inputtext-lg flex-grow"
                                           id="phone"
                                           mask="(999) 999-99-99"
                                           placeholder="(777) 000-99-99">
                                </InputMask>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
                            <div className="text-sm text-center md:text-left">
                                <RadioButton inputId="politics" name="some" value="some" checked={true} onChange={() => {}} />
                                <label className="ml-2" htmlFor="politics">Заполняя форму, я принимаю условия передачи информации <br/> условия передачи информации</label>
                            </div>
                            <Button severity="secondary" className="w-full md:w-[350px] p-4" loading={loading} label="Отправить" size="large" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}