import React, { useState } from 'react';
import './app.css'; 
import { Button } from 'react-bootstrap';



function App() {
  const [todo, setTodo] = useState("");
const [todolist, setTodolist] = useState([]);

  const addTodo = () =>
   {
    setTodolist([...todolist, todo]);
    console.log(todo);
    setTodo('')
  };
  
  const deleteTodo = (key) => 
  {
    const updatedTodoList = [...todolist];
    updatedTodoList.splice(key, 1);
    setTodolist(updatedTodoList);
  };

  const [completedItems, setCompletedItems] = useState([]);

  const toggleComplete = (key) => {
    setCompletedItems((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };


  return (
  <>
    <div className="main" >
    <div className="app">
      <br/>
      <h1>TO-DO-LIST</h1>
      {/* <p>Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p> */}
      <br />


<div className="data_input">
      <input className='input' type="text" placeholder='add an item' value={todo} onChange={(e) => setTodo(e.target.value)}  />
      <Button type="button" className="btn btn-outline-dark ms-3 btn-sm"  id='button' onClick={addTodo}> Add</Button>
      </div>      



      {/* {todolist.map((val, key) => (
            <div key={key} className='list'>
              <br />
<div className='retun_input' >{val}</div>
              <button  className='ms-3' id='deletebutton' >
              <MdDeleteOutline  className='icon' onClick={() => deleteTodo(key)} />
              </button>
             
            </div>
          ))} */}

{todolist.map((val, key) => (
            <div key={key} className='list'>
              <br />
              <div
                className={`retun_input ${completedItems.includes(key) ? 'completed' : ''}`}
              >
                {val}
              </div  >

             <div id='deleteButton'>
             <button className='ms-3 '  onClick={() => toggleComplete(key)}>
                {completedItems.includes(key) 
                ? (

                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzGAQ--BcGMJRXs6t5hIhvGfT3pbqYX6LAQ&usqp=CAU'
                     onClick={() => deleteTodo(key)}
                    alt='Delete'
                    className='delete_icon'
                    data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover"
                  />
                ) 
                :
                 (
                  <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD////v7+/u7u75+fn19fXy8vL8/PwhISHq6upRUVFBQUHR0dHBwcFWVlbGxsZISEjd3d1iYmJubm6ioqJ7e3u0tLSHh4fU1NTj4+OPj4+fn581NTUmJiYqKiqwsLAZGRkODg4wMDCYmJhnZ2dERESCgoJ2dnaMjIzCuM8CAAAN4ElEQVR4nN2dbX+jKhOHRUBiqjEmxiRt2qTtuffs9/+Et6j4FNRBQcn5v9nfui3hWszMAMPgICHqlvKqR+IJJtUjLB4x8YRUj7pNeST7IXKNgyhNzsfd22azcTI9Npvb/3bHc/KRBpcrZVVLA01N75XrGCHEHiWM+nF6Omy/Hs6AvraHU+pT8mKEmYLkeBsi6+h2ukfZb3kufgVC//K+/1Kgq4ZznwQ+Ih62m5Akf1TG7nksEw8RSwk9guJ0P4NOaH+/Em290kWIXcrw/fCpgY/rc3d37SLMfiP6VxOd0DnST4hLNdoSjxptCdVteez68aOZj+sn8Wf0qnrkUCFSCfRIPMiaP38b4OP6PseITepV45HzPObs2cGJMcdu9Sg36i4h0dYQXqFtoNyr/BGtHqkRuo22spfFOB/XIVLqVSkdhNkvhDvjfFzHYBXCbPz+WYSP63BZgRCfFuPj+sMQpFf6CMnHonxc77ToxTKEoY7oTFX7ELWjcnOE3rIvaK2Tl0UvI/av7HqD0BMirBSpHjHJI8RCEwEMTD8po9JeCVHxhFaPVKM24h5X4+M6M+WorSYUQz4Y44ar8nFF4stmZG7Bftfmy/RLPGOEV/MxGkQ3P0cyQBhu1mYr9RkyI4TJ2mANJdwwaiaky0WhEG1dqpmQvK3N1NGbWEZWIBzwhyiYsgBqVo8A1YRD/lCgunXUVj2qfj41tU4xR9+p8Iz1mEyNS9O1YXqUitfziVBxFWP5mRJUv6iHUG0MbfISXX0gDYTva1MM6p3NJrQbMENEMwltfkULfSA8h9BeI1PrFw17i8ozNggrR2+rm2grRTWh6HqDkPTrRQA54gDFUNQW2BjJyPQdiM6rrWIQ+2LRPj18WqylKs0tvDn78UvrzaXqhHbNB8e0RcqE9jvCthLu5FQI1181VFWIlAh9Wxad4Pr0vdE5fk1IXsnKCN2IBx9DGxZ+1ZXNFmtCtyKURG3k9b6EhSJp1PYceSN37Z5OFqtexOG5xbq7S3N0ruZFg4Sv+o5yVWtTQ4Teehug8/XjeeOEa21h69GpHMQBwld+R7lCMkJI1siy0Kk97RJ2/OErLMwM6xd1/GErjYHgtfunQZ08jVZcislrm5lCf/JvmzQuxeSydu+06NJPiA5rd06LDn2E+GUj7q6CvjEkyyTEmtexh5BEa/dMm6IeQjvygXToICVE/50hzL6JrCasdyn+O0PIl0+rgxdV1ObZGs489qffMDwf1SZ18XPkzc6GejhPh9QXXQ0ShRXA8xOhd7Vxo2l7qRbPmEsZuYMZv/0OIbZyUnHm5kEQZmGzy1zw5C7pjiGycO0iQM977+Cl3J8OIbXPVWwiJMku8MDJIVGbkOk+IDlfAV9xkeRPMOD04NwitM9VbIJOprMgxAT/D9ZEmYNS+ENyN9tfdUWsP0MEOAW6l4TFH7ZNDCuHLcl69YBWcYcamQqxrlPYerSJKhxZ5jIwC+bz2oi8LUucaWT/SnOzY9j+7Z3UhFYtknIjM0wInOf9oIqQGO6zmiI2UjUCM+CSIKWC0KqXNG6dwJMTAgObhAjCP2b7rKI8khkjJMAhybdpOKFvUV5C6ehHCIEx5s0vx9CedWBuZAqvXhHKToGAA5SA5FUjLEp0jkQa5XCJCPQX2F6CeNUIbI+vqJceqjRleW42dHtlj3jk7SFLsiwbkcwIIYUumn3lhDQw2m+4gka+9jAhvMcRJyR2ZCFyI0OBhHDvdueElqTPZH4QSujDWz3lb6kV3pBHMi6QUGE94ka4pTHXbbCKSAZEiJnSHiBFDolNdVtBZSQDIMRMrb8+ctj6YXdmZLqlHnprWTBfbbKeIseCHKjKD9aHJHqjNk9x/+jEnPWXaOpIZrz2paeanX1gztr7opmRAZRCLQl95c5uqbP21CkzMmBCV/3I/NfVAa7qGFI+XYIS+lNqAlycdaPSSH5IQkqoamQKBc6MLZnH9F8tlUcyIELMlI1ModSZ5A6/9+9BHF/jON3NWEsuIxkQIVU3MoU+nCkzi7/X2v4hlb3ntsSSheTQYNcf0knfQa7EUd++/5tvIIsTtx4h90nvz6Za2ZYc3hVPRC2LyYAZn/LcKWl3iweTwRTEekYvKfXQiUunGZlcR0cxl+1xkf3HM/WMuDqSkY1hm3Cikcm1cxSHP5R3iyrGftzIgAmnGplcb47af89HX7cURzEYKRPQJJwQyTS0USM8kt5uQbfX80/N54NAwulGpvgsNcJLPyGi8FEs/CCIkM0wMrnU3tHT8JcHihgXAABCTPDcsPmh9NMRbVaZfDrph0GImZHJf2+4qfLBFZh3oUk3f6A4QyYGGsUA0eFmGg3OMzLqOqLhqloQc1NHMiNNcc00MqUe8B99R4OV0TDE3Mj2Jvoi77lGJtdDxdYkkG4NI8ZIZi/lTc2JZGopeYsAQjgU3XAjA74qY1Yk0/hMFcIIQjgU3fDpEpRQl5HZqMSlvyDCXnOTRzJQQj1GxuFxqUI8+RdG2GduInDRUUy0GJlcO5X54QFIKDc3MbhwrIZIptZRZY5/82VVI+v6DFXfKXl6Ucs1meEClGVTk9dkZDorrdOEBBJqcWvyZG4qR1959f6mtEYyiaOSo78frozWnNS1zU0jkhkvFa/NyORSXE0MBmZPnYl5y9w0IplRQn1GpvhotTXvPZywaW7iRjrlGKGeSKZW4KilfJ0UCEV0w40MmFCnkeF6xM5VLV8ohRMKcxOMXmhQN6V9uvR1dcD5RaVCOGFuboo1GRAhJnqNDNeWOCorSE1ECCEiu3JNBkKYOXr9u7UH5EAziruIw/5QyL120yn7/SExUWDshJwJKdAhGrnwo75HI3tT+5Iruo+QbyJHMmWOSg6VUMhGNm5FBK1yHZyZNZmYOIhO+L0MEZ5eACPUb2Ry+a4zrfpcyDQTao5khG6U53lPShmqdmj0EOqOZISOjBNOO7cW6iTUHclUSggnnJirEGojNGRkuIL8LZ2a5x3qITQRyQhtqJcTTvVDYS+hxFvgHsIM0NxZgX32IQ4h08vNhkh+NkJyV2bvAQqdazJPekd51QhveloUd/1DUVvjaGttmNpRmzEjw8WTDvhJ5xnJexkiNMG+a5gKQqO7Sze/IMRzkmhDMovQnJHhyqt+8TGcdeKidv0TCA1FMkKpIKRTQtNK4XRCU5GMEBGE7ryzXeFUQqNGxinOdZWEMwsOhFMIMTG+hZ3WhO513nn8UJ3QZCRT6rNILCuqRoATRXpUIKr4Q3B1i+k6FB9YVo2YWxcjJHjsaGub3rSRcXjBgfwDS8LZBa7DsUP07TfYtJHhwsUanqjXNrsOVhbdwAmXyJP5t9y+E4TzawyFBExo3MhwRbRNqKFOVAglNBzJFPoRH1kRajgrG8IIFzAyTnHRVZvQ11CvLQQQsiWMjON8X8W2Q10ZUkfNvXCMENOFkvHOVZpATajlLGmB2O8PyXWhbENc7as41fKCntqXIeor9ZCnU5qPZApt61u86prsTM8ZLx7d9MalyxgZp5U40Kw6r+c0aeb6+wiXMTIO3xeV19XXVFkwZD2Ey2X8Bj2ESFN1hdr1twgXiWRy7Vjf3Qi6TlveZYR4uSIxKem9SUfXue5zhzD7wAULGR1Q/33A2rqxiyvCzCtSdP2zYInbizdwg4e+ql/HkG98uh5hiASL3pB1Iq2Dfk4nX0DjJ/0c7sElDu7HhWsYYdIqQNG5pfNF7yNrqjhe139LJ7WmLNZElcmF/TfLvfwNEN192yfCWds0FkgkTw7cDui9+J1d44SvcpGzXM8ZIpIbHrGlFfYhOsLusKQ6neKyqvMd5TfpVEsP9hVohykkslurBWrzqMeL+v1f+e3x7bg0J8TeS94lu2XSAhRSQtd7wfuAN1cEH0PXfcFrEHNHASfEzI6KmHAVJVfghNkovtbVQf8gZcKllt/16OapE2J6fazdb7C+qotwJYT96QUssPH6IJm+64JMgqZB2F+zgb5MDJ6ifgoijdoqvQZiWmd6yKK2mlC8ws3bQF4hfPsYPH8tm1s0N/2svOiqrZFaFiOEmVu0pyS9XLwcySxCl9mNmAPOI3StflHL8njzCG2eLYriakBC3ENo79pUdSh58hh64kFqY3TzXQEO1rIYiNoa6ZQoeKzN86SvoHL0g7UseiNvt5XYO71+qCndCKAAhQIhpq5d88V/PEiJDRXCbNhtmvUnbWuig5B/i0Nblqc2nVNzugixLRdDba/IDCGvGWyD8/9lyBih67H1F/wlZ6yHCUH+sHFocOWdqWO9+wApyMQJJaUeBu7RYNm/puttof6EDAEKULRqWTzHpWOlHjDy1toIP3m9vSofTZtbdNvK/gvCNTI29uFQr3QS8r/T5Y3qBxnplU5Cbr3YstdCnjCkVzoJs7Yuy91Qc7jUl6wvSJjNqZa50GyXZh1WKXWjjxChyPw47iJCXKzUqz5ChVIPjbYCs7Oqbc6HVXvVJJxU6qHxiKH4bGqN4/vMr3Oc0qvGI+WoTagZH/mJiTDn5+PKvBm9KqUWeffHuJHucPXfiH/GzF7pJMy+Hvc5t+q09Hm4Y0b5980qwkzXu45obp/GiHjaeqWTEGczG5qc5iwE3P4kpGjKUsLsbwT5QbKfkrz+tX+/+I2mLCV0S+cc3ZXG8nZM6kK8thNWTRHqp6fDdnA4H1/bwymNfcoI9WYW81meMG+L0eslSD+S83H3ttlsHhwr+/NtdzwnaRTEV15VWdgVI4T/B48bzKklT8auAAAAAElFTkSuQmCC'
                  alt='Done'
                  className='done_icon'/>                
                  )
                  }
              </button>
             </div>

            </div>
          ))}



    </div>
    </div>
  </>
  );
}

export default App;
