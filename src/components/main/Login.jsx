import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField } from '@mui/material';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const  Login = ({openLoginDialog, setOpenLoginDialog}) => {


  const navigate = useNavigate();

  const { setUser } = useGlobalContext();


  const { formState:{errors}, handleSubmit,  reset, register } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  console.log('Errors: ', errors)

  const handleCloseDialog = () => {
    reset()
    setOpenLoginDialog(false);
  };

  const onSubmit = (data) => {
    console.log('Form: ', data)
      const promise = axios.post('http://localhost:5000/Login', data)
      toast.promise(promise, {
        pending: {
          render(){
            return "Logging In..."
          }
        },
        success: {
          render(){
            return 'Logged in successfully 👌'
          }
        },
        error: {
          render({data}){
            // When the promise reject, data will contains the error
            if (data?.response) {
              return data?.response?.data?.message;
            } else if (data.request) {
              return 'Failed to send request.';
            } else {
              return 'Unknown error.';
            }
          }
        }
      }).then(response => {
        console.log(response.data);
        console.log('Token: ', response.data?.data?.token)
        window.localStorage.setItem('token', response.data?.data?.token);
        window.localStorage.setItem('user', JSON.stringify(response.data?.data?.user));
        setUser(response.data?.data?.user);
        navigate('/workspace');
        handleCloseDialog();
        // Redirect the user to the dashboard page
        //navigate('/workspace');
      }).catch(error => {
        console.log(error);
      });
  }
  

  return (
    <div>
      <Dialog
        open={openLoginDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle sx={{mx:'auto'}} >Login</DialogTitle>
        <DialogContent>
            <TextField 
              label="Email" 
              variant="outlined" 
              margin="dense" 
              fullWidth 
              error={!!errors?.email}
              helperText={errors?.email?.message}
              {...register('email',{
                required: 'Email is required'
              })} 
            />
            <TextField 
              label="Password" 
              type='password' 
              variant="outlined" 
              margin="dense" 
              fullWidth 
              error={!!errors?.password}
              helperText={errors?.password?.message}
              {...register('password',{
                required: 'Password is required'
              })}
            />
        </DialogContent>
        <DialogActions >
          <Button variant='contained' fullWidth style={{borderRadius:'10px'}} onClick={handleSubmit(onSubmit)} >Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login