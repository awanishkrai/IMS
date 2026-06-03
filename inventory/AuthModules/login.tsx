"use client";

function Login() {
    return (
        <>
        <div className="w-full justify-center">
            <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>
            <p className="mt-3 text-slate-600">
                Please login to access your dashboard.
            </p>
            <form className="mt-8 space-y-4">
                <div>
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your username"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Login
                </button>
            </form>
        </div>
        </>
    );
}
export default Login;