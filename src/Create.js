const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title:</label>
                <input 
                type="text"
                />
                <label>Blog body:</label>
                <textarea
                required
                ></textarea>
                <label>Blog author:</label>
                <select>
                    <option value="LaQuisha">laquisha</option>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;
