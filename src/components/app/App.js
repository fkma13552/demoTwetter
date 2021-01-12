import React, {useState} from "react";
import './App.css';
import Header from "../header";
import SearchPanel from "../search-panel";
import TweetStatusFilter from "../tweet-status-filter";
import TweetList from "../tweet-list";
import TweetAddForm from "../tweet-add-form";
import {v4 as uuidv4} from 'uuid';


function App() {

    const [data, changeData] = useState([
        {label: 'Going to learn React!', important: true, liked: false, id: 'df70213e-f2e3-4560-ad04-24ee7aa11dc6'},
        {label: 'Going to learn Java!', important: false, liked: false, id: '0907a7d6-2961-41e5-a427-042dae17e162'},
        {label: 'Going to learn Swift!', important: false, liked: false, id: 'ab7b2dcb-b4ea-460a-92ac-700e4b21065f'},
        {label: 'Going to learn Kotlin!', important: false, liked: false, id: 'c0a1fd37-0b2f-4e24-933d-784fa75b5ae7'}
    ]);

    const [query, setQuery] = useState("");

    const [filter, setFilter] = useState("noFilter")

    const liked = data.filter(item => item.liked).length;
    const allTweets = data.length;

    function deleteTweet(id){
        const index = data.findIndex(elem => elem.id === id);

        const before = data.slice(0, index);
        const after = data.slice(index + 1);
        const newArr = [...before, ...after];
        changeData(newArr);

    }

    function addTweet(text) {
        const newItem = {
            label: text,
            important: false,
            liked: false,
            id: uuidv4()
        }
        console.log(newItem.id);
        const newArr = [...data, newItem];
        changeData(newArr);
    }

    function toggleImportant(id) {
        const index = data.findIndex(elem => elem.id === id);
        const newItem = {...data[index], important: !data[index].important}
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        changeData(newArr);
    }

    function toggleLike(id) {
        const index = data.findIndex(elem => elem.id === id);
        const newItem = {...data[index], liked: !data[index].liked}
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        changeData(newArr);
    }

    function searchTweet(items, query) {
        if(query.length === 0){
            return items
        }
        return items.filter( (item) => {
            return item.label.indexOf(query) > -1
        });
    }

    function filterTweets(items, filter) {
        switch (filter){
            case 'like':
                return items.filter(item => item.liked)

            case 'noFilter':
                return items
        }
    }


    const tweetsToShow = filterTweets(searchTweet(data, query), filter);

    return (
      <div className="app">
        <Header liked={liked} allTwets={allTweets}/>
        <div className="search-panel d-flex">
            <SearchPanel onType={(query) => setQuery(query)}/>
            <TweetStatusFilter filter={filter} filterSelect={(chosenFilter) => setFilter(chosenFilter)} />
        </div>
        <TweetList posts={tweetsToShow} deleteTweet={deleteTweet} toggleImportant={toggleImportant} toggleLike={toggleLike}/>
        <TweetAddForm addTweet={addTweet}/>
      </div>
  );
}

export default App;
