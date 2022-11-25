import { Rate } from 'antd';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import { toast, ToastContainer} from 'react-toastify';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const AddReview = () => {
  const [value, setValue] = useState(3);
  const [comment, setComment] = useState('');
  const [user, loading] = useAuthState(auth);


  const handleReview = (e) => {
    // fetch to mongodb to add the review
    console.log(value);
    fetch('https://warehouse-serverside-537o.onrender.com/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({
        review: value,
        comment:comment,
        user: user.email,
        name: user.displayName
      })
    })
  toast("Adding Done")

  
  }

  return (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
      {/* Say something about a product */}
      <textarea
        style={{ width: '100%', height: '100px' }}
        placeholder="Say something about a product"
        className="mt-5 ant-input"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      {/* button to submit */}
      <button onClick={handleReview} className="ant-btn ant-btn-primary mt-5">Submit</button>
      <ToastContainer/>
    </span>
  );
};

export default AddReview;