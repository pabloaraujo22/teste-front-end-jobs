import { Alert, Box, Button, CircularProgress, Grid } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/Update.module.css';
import Input from '../../components/Input';
import api from '../../lib/api';
import { useState } from 'react';
import SelectColor from '../../components/SelectColor';
import InputPrice from '../../components/InputPrice';
import SelectDate from '../../components/SelectDate';
import moment from 'moment';
import 'moment/min/locales.min';

export async function getServerSideProps(context) {
    moment().locale('pt-br');
    const id = context.params.id;
    const data = await api.get(`/phone/${id}`).then((res) => res.data);
    return {
        props: {
            data,
        },
    };
}

export default function UpdateProduct(props) {
    const [phone, setPhone] = useState(props.data);
    const [message, setMessage] = useState({
        msg: 'Phone atualizado com Sucesso!',
        type: 'success',
    });

    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    function handlePhone({ name, value }) {
        setPhone({ ...phone, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoaded(false);
        setLoading(true);
        try {
            if (
                moment
                    .duration(moment(phone.endDate).diff(moment(phone.date)))
                    .asDays() <= 0
            ) {
                throw new Error(
                    'A data de Término deve ser maior que a data de Inicio!'
                );
            }
            phone.date = moment(phone.date).format('L');
            phone.endDate = moment(phone.endDate).format('L');

            await api.patch(`/phone/${phone._id}`, phone);
            setLoaded(true);
            setLoading(false);
            setMessage({
                msg: 'Phone atualizado com Sucesso!',
                type: 'success',
            });
            setTimeout(() => {
                router.push({ pathname: '/' });
            }, 2000);
        } catch (e) {
            setLoading(false);
            setLoaded(true);
            setMessage({
                msg: `Erro ao atualizar o telefone!: ${e.message}`,
                type: 'error',
            });
        }
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>M Celulares</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.form_control}>
                    <h1>Detalhes do Produto</h1>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={5}>
                            {loaded && (
                                <Grid item xs={12}>
                                    <Alert severity={message.type}>
                                        {message.msg}
                                    </Alert>
                                </Grid>
                            )}
                            <Grid item xs={6}>
                                <Input
                                    label="Modelo"
                                    name="model"
                                    defaultValue={phone.model}
                                    handleOnChange={handlePhone}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    label="Marca"
                                    name="brand"
                                    defaultValue={phone.brand}
                                    handleOnChange={handlePhone}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <SelectColor
                                    label="Cor"
                                    name="color"
                                    defaultValue={phone.color}
                                    handleOnChange={handlePhone}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <InputPrice
                                    label="Preço"
                                    name="price"
                                    defaultValue={phone.price}
                                    handleOnChange={handlePhone}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <SelectDate
                                    label="Inicio das Vendas"
                                    name="date"
                                    defaultValue={phone.date}
                                    handleOnChange={handlePhone}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <SelectDate
                                    label="Fim das Vendas"
                                    name="endDate"
                                    defaultValue={phone.endDate}
                                    handleOnChange={handlePhone}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container justifyContent="flex-end">
                                    <Button
                                        href="/"
                                        variant="contained"
                                        sx={{ marginLeft: '20px' }}
                                    >
                                        Voltar
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ marginLeft: '20px' }}
                                    >
                                        Salvar
                                    </Button>
                                </Grid>
                            </Grid>
                            {loading && (
                                <Grid item xs={12}>
                                    <Grid container justifyContent="center">
                                        <CircularProgress />
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                </div>
            </main>

            <Footer />
        </div>
    );
}
