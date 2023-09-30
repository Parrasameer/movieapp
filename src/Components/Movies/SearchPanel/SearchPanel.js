import styles from "./SearchPanel.module.css"
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
import { classNames } from 'primereact/utils';

function MovieCard() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    return (
        <div className={styles.mainWrapper} >
            <div className={styles.main}>
                <div > <p className={styles.text1}> WELCOME TO BOLETO</p>
                    <p className={styles.text2}> WHAT ARE YOU LOOKING FOR</p>
                </div>
                <div className={styles.searchbox}>
                    <div className={styles.searchwrapper}><input className={styles.search} type="text" placeholder="Search for Movies" /> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={styles.searchIcon + ' bi bi-search'} viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></div>
                    <div className={styles.searchOption}>
                        <img className={styles.image} src="http://pixner.net/boleto/demo/assets/images/ticket/city.png"></img>
                        <label> City</label>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                            placeholder="Select a City" className={styles.pdropdown} />
                    </div>
                    <div className={styles.searchOption}>
                        <img className={styles.image} src="http://pixner.net/boleto/demo/assets/images/ticket/date.png" alt="" />
                        <label> Date</label>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                            placeholder="Select a City" className={styles.pdropdown} />
                    </div>
                    <div className={styles.searchOption}>
                        <img className={styles.image} src="http://pixner.net/boleto/demo/assets/images/ticket/cinema.png" alt="" />
                        <label> Cinema</label>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                            placeholder="Select a City" className={styles.pdropdown} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieCard