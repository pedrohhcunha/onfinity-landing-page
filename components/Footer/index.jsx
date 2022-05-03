import styles from './style.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerPrimary}>
                <div className={styles.areaInfo}>
                    <h3 className={styles.title}>Institucional</h3>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a href="#a-onfinity" className={styles.link}>A Onfinity</a>
                        </li>
                        <li className={styles.item}>
                            <a href="#solucoes" className={styles.link}>Soluções</a>
                        </li>
                        <li className={styles.item}>
                            <a href="#segmentos" className={styles.link}>Segmentos</a>
                        </li>
                    </ul>
                </div>
                {/* <div className={styles.areaInfo}>
                    <h3 className={styles.title}>Conteúdos</h3>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a href="#" className={styles.link}>Catálogo Onfinity Health</a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={styles.link}>Catálogo Onfinity Suprimentos Industriais </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={styles.link}>Catálogo Onfinity Facilities </a>
                        </li>
                    </ul>
                </div> */}
                <div className={styles.areaInfo}>
                    <h3 className={styles.title}>Contatos</h3>
                    <p className={styles.paragraph}>
                        comercial@onfinity.com.br <br />
                        (49) 3050.1095 <br />
                        (49) 98829.3779
                    </p>
                </div>
                <div className={styles.areaInfo}>
                    <h3 className={styles.title}>Contatos</h3>
                    <ul className={`${styles.socialMedias} ${styles.list}`}>
                        <li className={styles.item}>
                            <a aria-label='Link Facebook Onfinity' href="https://www.facebook.com/Onfinity-101644625222997" className={styles.link}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 0C1.34315 0 0 1.34315 0 3V29C0 30.6569 1.34315 32 3 32H29C30.6569 32 32 30.6569 32 29V3C32 1.34315 30.6569 0 29 0H3ZM23.0195 4.17579C23.2519 4.17085 23.4939 4.1784 23.7441 4.19531C24.0644 4.19574 24.3896 4.20609 24.7178 4.22292C25.7635 4.27659 26.5539 5.17968 26.5253 6.22637C26.496 7.29846 25.6184 8.15235 24.5459 8.15235H23.9141C22.7144 8.12579 22.2811 8.59163 22.2422 9.94531V10.8007C22.2422 11.9722 23.1918 12.9219 24.3633 12.9219H24.4591C25.6136 12.9219 26.5354 13.8836 26.4866 15.037C26.4406 16.1234 25.5465 16.9805 24.4591 16.9805H24.3673C23.1936 16.9805 22.2422 17.9319 22.2422 19.1056V26.165C22.2422 27.3327 21.2956 28.2793 20.1279 28.2793C18.9603 28.2793 18.0137 27.3327 18.0137 26.165V18.4483C18.0137 17.6376 17.3565 16.9805 16.5459 16.9805C15.7353 16.9805 15.0781 16.3233 15.0781 15.5127V14.3896C15.0781 13.579 15.7353 12.9219 16.5459 12.9219C17.3565 12.9219 18.0137 12.2647 18.0137 11.4541V9.43749C18.0137 6.92525 19.0758 5.32619 21.168 4.51563C21.7053 4.30421 22.3223 4.19059 23.0195 4.17579Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a aria-label='Link Instagram Onfinity' href="" className={styles.link}>
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 19.1613C14.5 19.1613 13.2 17.9613 13.2 16.3613C13.2 14.8613 14.4 13.5613 16 13.5613C17.5 13.5613 18.8 14.7613 18.8 16.3613C18.8 17.8613 17.5 19.1613 16 19.1613Z" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.4 9.56133H12.6C11.8 9.66133 11.4 9.76132 11.1 9.86133C10.7 9.96133 10.4 10.1613 10.1 10.4613C9.86261 10.6987 9.75045 10.9361 9.61489 11.223C9.59983 11.2549 9.58448 11.2874 9.56862 11.3206C9.52369 11.4147 9.48336 11.5109 9.44752 11.6088C9.34291 11.8947 9.2 12.2851 9.2 12.9613V19.7613C9.3 20.5613 9.4 20.9613 9.5 21.2613C9.6 21.6613 9.8 21.9613 10.1 22.2613C10.3374 22.4987 10.5748 22.6109 10.8617 22.7464C10.8936 22.7615 10.9261 22.7769 10.9593 22.7927C11.0533 22.8376 11.1496 22.878 11.2475 22.9138C11.5333 23.0184 11.9238 23.1613 12.6 23.1613H19.4C20.2 23.0613 20.6 22.9613 20.9 22.8613C21.3 22.7613 21.6 22.5613 21.9 22.2613C22.1374 22.0239 22.2495 21.7866 22.3851 21.4996C22.4002 21.4677 22.4155 21.4352 22.4314 21.4021C22.4763 21.308 22.5166 21.2117 22.5525 21.1138C22.6571 20.828 22.8 20.4376 22.8 19.7613V12.9613C22.7 12.1613 22.6 11.7613 22.5 11.4613C22.4 11.0613 22.2 10.7613 21.9 10.4613C21.6626 10.2239 21.4252 10.1118 21.1383 9.97621C21.1065 9.96117 21.0739 9.94581 21.0407 9.92995C20.9467 9.88501 20.8504 9.84468 20.7525 9.80885C20.4667 9.70423 20.0762 9.56133 19.4 9.56133ZM16 12.0613C13.6 12.0613 11.7 13.9613 11.7 16.3613C11.7 18.7613 13.6 20.6613 16 20.6613C18.4 20.6613 20.3 18.7613 20.3 16.3613C20.3 13.9613 18.4 12.0613 16 12.0613ZM21.4 11.9613C21.4 12.5136 20.9523 12.9613 20.4 12.9613C19.8477 12.9613 19.4 12.5136 19.4 11.9613C19.4 11.409 19.8477 10.9613 20.4 10.9613C20.9523 10.9613 21.4 11.409 21.4 11.9613Z" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 3.36133C0 1.70447 1.34315 0.361328 3 0.361328H29C30.6569 0.361328 32 1.70447 32 3.36133V29.3613C32 31.0182 30.6569 32.3613 29 32.3613H3C1.34315 32.3613 0 31.0182 0 29.3613V3.36133ZM12.6 8.06133H19.4C20.3 8.16132 20.9 8.26133 21.4 8.46133C22 8.76133 22.4 8.96133 22.9 9.46133C23.4 9.96133 23.7 10.4613 23.9 10.9613C24.1 11.4613 24.3 12.0613 24.3 12.9613V19.7613C24.2 20.6613 24.1 21.2613 23.9 21.7613C23.6 22.3613 23.4 22.7613 22.9 23.2613C22.4 23.7613 21.9 24.0613 21.4 24.2613C20.9 24.4613 20.3 24.6613 19.4 24.6613H12.6C11.7 24.5613 11.1 24.4613 10.6 24.2613C10 23.9613 9.6 23.7613 9.1 23.2613C8.6 22.7613 8.3 22.2613 8.1 21.7613C7.9 21.2613 7.7 20.6613 7.7 19.7613V12.9613C7.8 12.0613 7.9 11.4613 8.1 10.9613C8.4 10.3613 8.6 9.96133 9.1 9.46133C9.6 8.96133 10.1 8.66133 10.6 8.46133C11.1 8.26133 11.7 8.06133 12.6 8.06133Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a aria-label='Link Linkedin Onfinity' href="https://www.linkedin.com/company/69572341/admin/" className={styles.link}>
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 3.36133C0 1.70447 1.34315 0.361328 3 0.361328H29C30.6569 0.361328 32 1.70447 32 3.36133V29.3613C32 31.0182 30.6569 32.3613 29 32.3613H3C1.34315 32.3613 0 31.0182 0 29.3613V3.36133ZM9.9 13.6613C8.96111 13.6613 8.2 14.4224 8.2 15.3613V22.6613C8.2 23.6002 8.96111 24.3613 9.9 24.3613C10.8389 24.3613 11.6 23.6002 11.6 22.6613V15.3613C11.6 14.4224 10.8389 13.6613 9.9 13.6613ZM8 10.2613C8 11.3613 8.8 12.1613 9.9 12.1613C11 12.1613 11.8 11.3613 11.8 10.2613C11.8 9.16133 11 8.36133 9.9 8.36133C8.9 8.36133 8 9.16133 8 10.2613ZM20.6 22.7613C20.6 23.645 21.3163 24.3613 22.2 24.3613C23.0837 24.3613 23.8 23.645 23.8 22.7613V17.7613C23.8 14.4613 21.8 13.3613 19.9 13.3613C18.8911 13.3613 18.0583 13.7488 17.4852 14.2101C17.2688 14.3843 16.7 14.1946 16.7 13.9168C16.7 13.7757 16.5856 13.6613 16.4445 13.6613H15.1C14.2163 13.6613 13.5 14.3777 13.5 15.2613V22.6613C13.5 23.6002 14.2611 24.3613 15.2 24.3613C16.1389 24.3613 16.9 23.6002 16.9 22.6613V18.6613C16.9 17.1613 17.9 16.3613 18.9 16.3613C19.9 16.3613 20.6 16.8613 20.6 18.5613V22.7613Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a aria-label='Link Youtube Onfinity' href="https://www.youtube.com/channel/UCJcNEbd45CSj6NxQie03ENw" className={styles.link}>
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.4838 17.5706C17.4195 17.0359 17.4195 15.6867 16.4838 15.1521C15.5553 14.6215 14.4 15.2919 14.4 16.3613C14.4 17.4307 15.5553 18.1012 16.4838 17.5706Z" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 3.36133C0 1.70447 1.34315 0.361328 3 0.361328H29C30.6569 0.361328 32 1.70447 32 3.36133V29.3613C32 31.0182 30.6569 32.3613 29 32.3613H3C1.34315 32.3613 0 31.0182 0 29.3613V3.36133ZM22.2 11.0613C22.9 11.2613 23.4 11.7613 23.6 12.4613C24 13.7613 24 16.3611 24 16.3613C24 16.3613 24 16.3613 24 16.3613C24 16.3615 24 18.9614 23.7 20.2613C23.5 20.9613 23 21.4613 22.3 21.6613C21 21.9613 16 21.9613 16 21.9613C16 21.9613 16 21.9613 16 21.9613C16 21.9613 10.9 21.9613 9.7 21.6613C9 21.4613 8.5 20.9613 8.3 20.2613C8 18.9613 8 16.3613 8 16.3613C8 16.3613 8 13.7613 8.2 12.4613C8.4 11.7613 8.90001 11.2613 9.60001 11.0613C10.9 10.7613 15.9 10.7613 15.9 10.7613C15.9 10.7613 21 10.7613 22.2 11.0613Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerSecondary}>
                <div className={styles.areaInfo}>
                    <h3 className={styles.title}>Industrias</h3>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a href="https://www.azeplast.com.br/" target="_blank" rel="noreferrer" className={styles.link}>Azeplast</a>
                        </li>
                        <li className={styles.item}>
                            <a href="https://septi.life/" target="_blank" rel="noreferrer" className={styles.link}>Septi</a>
                        </li>
                        <li className={styles.item}>
                            <a href="https://www.weikki.com.br/" target="_blank" rel="noreferrer" className={styles.link}>Weikki</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.areaInfo}>
                    <h3 className={styles.title}>Centro de distribuição</h3>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <p className={styles.paragraph}>
                                <strong>Centro de Distribuição Sul</strong> <br />
                                Rua Beira Rio, 215 E | Bairro Efapi | Chapecó-SC
                            </p>
                        </li>
                        <li className={styles.item}>
                            <p className={styles.paragraph}>
                                <strong>Centro de Distribuição Norte</strong> <br />
                                Rua André Rovai, 414 | Bairro Bonfim | Osasco-SP
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.areaInfo}>
                    <h3 className={styles.title}>Escritórios de Atendimento</h3>
                    <p className={styles.paragraph}>
                    Avenida Porto Alegre 427 D Centro |  Chapecó |  SC
                    </p>
                </div>
            </div>
            <div className={styles.finalBar}>Onfinity 2022. Todos os direitos reservados </div>
        </footer>
    )
}