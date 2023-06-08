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

const Register = ({openRegisterDialog, setOpenRegisterDialog}) => {

  const navigate = useNavigate()
  const { setUser } = useGlobalContext()

    const { formState:{errors}, handleSubmit, getValues, watch, reset, register } = useForm({
      defaultValues: {
        email: '',
        password: '',
        name: ''
      }
    });
    watch()
    console.log('From: ', getValues())
    
    console.log('Errors: ', errors)

  const handleCloseDialog = () => {
    reset()
    setOpenRegisterDialog(false)
  };

    const onSubmit = (data) => {
      console.log('Form: ', data)
        const promise = axios.post('http://localhost:5000/AddUser', data)
        toast.promise(promise, {
          pending: {
            render(){
              return "Registering..."
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
                return data?.response?.data?.message
              } else if (data.request) {
                return 'Failed to send request.'
              } else {
                return 'Unknown error.'
              }
            }
          }
        }).then(response => {
          console.log(response.data);
          console.log('Token: ', response.data?.data?.token)
          window.localStorage.setItem('token', response.data?.data?.token)
          window.localStorage.setItem('user', JSON.stringify(response.data?.data?.user))
          setUser(response.data?.data?.user);
          // Redirect the user to the dashboard page
          navigate('/workspace')
          handleCloseDialog()
        }).catch(error => {
          console.log(error);
        });
    }

  return (
    <div>
      <Dialog
        open={openRegisterDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle sx={{mx:'auto'}} >Register</DialogTitle>
        <DialogContent>
            <TextField label="Email" variant="outlined" margin="dense" fullWidth 
              {...register('email', {required: {value: true, message: 'This field is required'}, pattern: {value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Please enter a valid email'}})} 
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
            <TextField id="outlined-basic" label="Password" type='password' variant="outlined" margin="dense" fullWidth 
              {...register('password', {required: {value: true, message: 'This field is required'}, minLength: {value: 6, message: 'Password must be at least 6 characters long'}})}
              error={!!errors?.password}
              helperText={errors?.password?.message || 'Password must be at least 6 characters long'}
            />
            <TextField id="outlined-basic" label="Name" variant="outlined" margin="dense" fullWidth 
              {...register('name', {required: {value: true, message: 'This field is required'}})}
              error={!!errors?.name}
              helperText={errors?.name?.message}
            />
        </DialogContent>
        <DialogActions  >
          <Button variant='contained' fullWidth style={{borderRadius:'10px'}} onClick={handleSubmit(onSubmit)} >Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Register