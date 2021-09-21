import create from 'zustand'


const useStore = create((set) => ({

    isLoggedIn: false,

    recentEpisodes: [
        {
            "title": "The need to prioritize our vertical relationships",
            "author": "Clement Oladipupo - Author",
            "imageSrc": "https://images.unsplash.com/photo-1611532736576-78f7b69f4b9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
            title: "The investment of our natural abilities",
            imageSrc: "https://websitedemos.net/creative-podcaster-02/wp-content/uploads/sites/775/2021/02/podcaster-template-podcast-cover-img-2.jpg",
            author: "Clement Oladipupo - Author",
        },
        {
            title: "Understanding the 3-fold dimension of investments",
            imageSrc: "https://websitedemos.net/creative-podcaster-02/wp-content/uploads/sites/775/2021/02/podcaster-template-podcast-cover-img-3.jpg",
            author: "Clement Oladipupo - Author",
        }
    ],

    addRecentEpisodes: (episode) => set((state) => ({
        recentEpisodes: [...state.recentEpisodes, episode]
    }))
}))
export default useStore