import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetails() {
    const { title } = useParams();
    const decodedTitle = decodeURIComponent(title);

    // For simplicity, I'll hardcode the content here.
    // In a real application, you'd likely fetch this data based on the title or an ID.
    const postContent = {
        "Web development": "Web development is the process of creating websites and web applications for the internet. It involves a combination of programming, design, and content creation. The field is divided into front-end and back-end development. Front-end developers focus on the visual aspects and user experience, using technologies like HTML, CSS, and JavaScript. Back-end developers work on server-side logic, databases, and application functionality, often utilizing languages such as Python, Ruby, and PHP. Modern web development also embraces frameworks and libraries like React, Angular, and Django to streamline and enhance the development process. Effective web development ensures websites are user-friendly, responsive, and accessible across various devices.",
        "App development": "App development involves creating software applications for mobile devices, tablets, and increasingly, wearable devices. It encompasses a wide range of activities from conceptualization and design to coding, testing, and deployment. Developers use programming languages like Java, Swift, and Kotlin for native apps, or frameworks like React Native and Flutter for cross-platform apps. The process includes creating intuitive user interfaces, integrating with backend services, and ensuring performance and security. App development also requires adapting to different operating systems like iOS and Android. Successful app development results in user-friendly, functional, and engaging apps that meet specific user needs and provide seamless experiences.",
        "UI/UX Design": "UI/UX design focuses on enhancing user satisfaction by improving the usability, accessibility, and pleasure of interacting with a product. UI (User Interface) design involves creating visually appealing and intuitive interfaces using typography, color schemes, and layout techniques. UX (User Experience) design is about optimizing the overall experience and ensuring it is efficient and enjoyable. This process includes user research, wireframing, prototyping, and usability testing. UX designers aim to understand user needs and behaviors, creating products that are both functional and user-centric. Together, UI and UX design ensure that digital products are not only aesthetically pleasing but also user-friendly and effective.",
        "Project Management": "Project management is the discipline of planning, executing, and overseeing projects to achieve specific goals within constraints such as time, budget, and resources. It involves defining project objectives, creating detailed plans, allocating tasks, and managing team members. Effective project management ensures that projects are completed on time and within budget while meeting quality standards. Key methodologies include Agile, Scrum, and Waterfall, each suited to different project types and industries. Project managers use tools like Gantt charts, project management software, and risk assessment techniques to track progress and address challenges. Successful project management leads to efficient workflow, clear communication, and project success."
    };

    const [comments, setComments] = useState([

    ]);

    const [newComment, setNewComment] = useState('');

    const handleAddComment = (e) => {
        e.preventDefault();

        const newId = comments.length + 1;

        setComments([
            ...comments,
            { id: newId, text: newComment, author: "Anonymous" } // For simplicity, author is hardcoded
        ]);

        setNewComment('');
    };

    return (
        < div className='min-h-screen w-full bg-gray-700 '>
            < div className='max-w-xl mx-auto p-6' >
                <h2 className='text-2xl font-semibold mb-4 text-center text-white'>{decodedTitle}</h2>
                <p className='text-white'>{postContent[decodedTitle]}</p>
            </ div>
            <div className='max-w-xl mx-auto p-6'>
                {comments.map(comment => (
                    <div key={comment.id} className="mb-2">
                        <p className="text-gray-300"><strong>{comment.author}:</strong> {comment.text}</p>
                    </div>
                ))}

                <form onSubmit={handleAddComment}>
                    <textarea
                        rows="3"
                        className="w-full p-2 bg-gray-800 text-gray-100 rounded"
                        placeholder="Add your comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Post Comment</button>
                </form>
            </div>

        </div >
    );
}

export default PostDetails;
