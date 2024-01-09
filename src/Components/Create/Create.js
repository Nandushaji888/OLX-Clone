import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {AuthContext,FirebaseContext} from '../../store/FirebaseContext'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate()
  const {firebase}=useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name,setName] = useState('')
  const [category,setCategory] = useState('');
  const [price,setPrice] = useState('')
  const [image,setImage] =useState(null)
  const date = new Date()
  const handleSubmit=()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then((snapshot)=>{
      snapshot.ref.getDownloadURL().then((url)=>{
        console.log(url);
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt: date.toDateString()
        })
        navigate('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              value={category}
              onChange={(e)=> setCategory(e.target.value)}
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" value={price} onChange={(e)=> setPrice(e.target.value)} type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="100px" height="100px" src={image? URL.createObjectURL(image):''}></img>
        
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
