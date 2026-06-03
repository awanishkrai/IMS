import  pool from '../app/databaseConnection';

async function registerUser(username: string,password: string,email: string,role: string){
    if(!username || !password || !email){
        console.error('All fields are required')
        return { success: false, message: 'All fields are required' };
    }
    try{
        const client=await pool.connect();
        const duplicateVerify= await client.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);
        if(duplicateVerify.rows.length > 0){
            console.error('User already exists')
            return { success: false, message: 'User already exists' };
        }
        const query='Insert into users (username,password,email,role) valuse ($1,$2,$3,$4) returning id';
        const result=await client.query(query,[username,password,email]);
        return { success: true, message: 'User registered successfully', userId: result.rows[0].id };
    } catch (error) {
        console.error('Error registering user:', error);
        return { success: false, message: 'Error registering user' };
    }
}
export default registerUser;