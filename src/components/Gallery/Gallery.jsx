import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { doc, deleteDoc } from 'firebase/firestore';
import { useEffect,useState } from 'react';
import Addphoto from '../Addphoto/Addphoto';
import Backdrop from '../Backdrop/Backdrop';
import Header from '../Header/Header';
import { addDoc } from 'firebase/firestore';
import { v4 } from 'uuid';
import { Timestamp } from 'firebase/firestore';

export default function Gallery() {
  const q = query(collection(db,'images'),orderBy('createdAt'));
  const  [values,loading,snapshot]  =  useCollectionData(q);
  const [modal,setModal] = useState(false);
  const  [images,setImages] = React.useState([{name:'loading...',id:'initial'}]);
  const [caption,setCaption] = useState('');
  const [imgURL,setImgURL] = useState('');
  const [filter,setFilter] = useState('')


  function publish(){
      const storeRef = collection(db,'images')
      if(imgURL.length < 10 & caption.length < 3){
        alert('minmum length for caption is 3 for url 10');
        return
      }
      addDoc(storeRef,{
          id: v4(),
          caption:caption,
          imageURL:imgURL,
          createdAt: Timestamp.now().toDate(),
      });
      setImgURL('');
      setCaption('');
      setModal(false)
  }


  useEffect(() => {
    onSnapshot(collection(db, "images"), (snapshot) =>
      setImages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      )
  },[])
  
  const deletePost = async (id) => {
    const postRef = doc(db,'images',id)
    await deleteDoc(postRef)
  }

  // images.filter((elem) => caption.toLowerCase().includes(filter.toLowerCase))

  return (
    <>
    <Header handleChange={(e) => setFilter(e.target.value)} handleClick={() => setModal(true)}/>
    {modal && <Backdrop handleClick={() => setModal(false)}/>}
    {modal && <Addphoto handleCaption={(e) => setCaption(e.target.value)} handleURL={(e) => setImgURL(e.target.value)} imgURL={imgURL} handlePublish={publish} caption={caption} handleCancel={() => setModal(false)}/>}
    <div className='grid'>
        {loading && <div class="loadingio-spinner-eclipse-rr43fjzjqk"><div class="ldio-9wgu8o0fitd">
                      <div></div>
                      </div></div>}
        {!loading && images?.filter((elem) => elem.caption.toLowerCase().includes(filter.toLowerCase())).map((elem) => {
          return (
            <div className='content flow' style={{position:'relative'}}>
              <div className='display'></div>
              <div className='imageHover'>
                <strong style={{color:'white'}}>{elem.caption}</strong>
                <button onClick={() => deletePost(elem.id)} className='delete-btn'>Delete</button>
              </div>
              <img key={elem.id} src={elem.imageURL} className='galleryImg' alt='post'>
              </img>
            </div>
          )
          })}
    </div>
    </>
  )
}
