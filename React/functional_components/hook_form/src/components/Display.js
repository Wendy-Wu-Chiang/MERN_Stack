import React from  'react';


const Display = (props) =>{

    const{studentList} = props;
    
    return(
        <div>
            <h3>Your Form Data</h3>
            <div>
                {
                    studentList.map((student,index)=>(
                        <div key ={index}>
                            <p>First Name: {student.firstName}</p>
                            <p>Last Name: {student.lastName}</p>
                            <p>Email: {student.email}</p>
                            <p>Favotit Stack: {student.favStack}</p>
                            {
                                student.hikingClub ===true?
                                <p>Welcome to the club!!</p>
                                :<p>Nah... not hiking person...</p>
                            }
                            <p>Password: {student.password}</p>
                            <p>Comfirm Password: {student.password}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Display;