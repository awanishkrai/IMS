import pool from '../app/databaseConnection';
//using jwt for authentication
const jwt=require('jsonwebtokens');
async function loginUser(username: string, password: string,Role:string) {
    if (!username || !password) {
        console.error('Username and password are required');
        return { success: false, message: 'Username and password are required' };
    }
    try{
        const client=await pool.connect();
        const query='select * from users where usernamne=$1 and password=$2 and role=$3';
        const result=await client.query(query,[username,password,Role]);
        if(result.rows.length > 0){
            const token=jwt.sign({
                userId:result.rows[0].id,
                username:result.rows[0].username,
                email:result.rows[0].email,
                role:result.rows[0].role
            },process.env.JWT_SECRET,{
                expiresIn:'1h'
            })
            return { success: true, message: 'Login successful', userId: result.rows[0].id };
        } else {
            console.error('Invalid username or password');
            return { success: false, message: 'Invalid username or password' };
        }
    }
    catch (error){
    console.error('Error logging in user:', error);
    return { success: false, message: 'Error logging in user' };
}
}
export default loginUser;