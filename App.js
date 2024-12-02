import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { PokemonCards } from './components/PokemonCard';

export default function App() {

const snorlaxData = {
    name: "Snorlax",
    image: require("./assets/Snorlax.png"), 
    type: "Normal", 
    hp: 160,
    moves: ["Protect", "Headbutt", "Hyper Beam", "Ice Punch"],
    weaknesses: ["Fighting"],
  };

const mewtwoData = {
    name: "Mewtwo", 
    image: require("./assets/Mewtwo.png"), 
    type: "Psychic",
    hp: 106,
    moves: ["Psystrike ", "Confusion"],
    weaknesses: ["Bug", "Ghost", "Dark"],
  };

const charizardData = {
    name: "Charizard",
    image: require("./assets/Charizard.png"), 
    type: "Fire",
    hp: 78,
    moves: ["Wing Attack ", "Blast Burn", "Dragon Claw"],
    weaknesses: ["Electric", "Rock", "Water"],
  };

const garchompData = {
    name: "Garchomp",
    image: require("./assets/Garchomp.png"),
    type: "Ground",
    hp: 108,
    moves: ["Dragon Tail", " Outrage"],
    weaknesses: ["Ice", "Dragon", "Fairy"]
  };

const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/Bulbasaur.png"), 
    type: "Grass",
    hp: 45,
    moves: ["Razor Leaf", "Poison Powder", "Sleep Powder", " Seed Powder"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

const pikachuData = {
    name: "Pikachu",
    image: require("./assets/Pikachu.png"), 
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Double Whip", "Tackle"],
    weaknesses: ["Ground"],
  };
  
const eeveeData = {
    name: "Eevee",
    image: require("./assets/Eevee.png"), 
    type: "Normal", 
    hp: 65,
    moves: [" Bouncy Bubble", "Buzzy Buzz","Sappy Seed","Glitzy Glow"],
    weaknesses: ["Fighting"],
  };

 const vaporeonData = {
    name: "Vaporeon",
    image: require("./assets/Vaporeon.png"), 
    type: "Water",
    hp: 130,
    moves: ["Water Gun", "Hydro Pump", "Aqua Ring", "Acid Armor"],
    weaknesses: ["Electric", "Grass"],
  };


 const frogadierData = {
    name: "Frogadier",
    image: require("./assets/Frogadier.png"), 
    type: "Water", 
    hp: 54,
    moves: ["	Pound", "	Bubble", "Quick Attack", "Lick"],
    weaknesses: ["Electric", "Grass"],
  };

 const beedrillData = {
    name: "Beedrill",
    image: require("./assets/Beedrill.png"), 
    type: "Flying", 
    hp: 65,
    moves: [" Poison Jab", "Sludge Bomb", "Twineedle", "Pin Missile"],
    weaknesses: ["Psychic","Rock","Flying","Fire"],
  };

  
   
  return (
    
    <SafeAreaView style={styles.container}>
      

      <ScrollView >
      
        <PokemonCards {...snorlaxData}/>
         <PokemonCards {...mewtwoData}/>
          <PokemonCards {...charizardData}/>
           <PokemonCards {...garchompData}/>
            <PokemonCards {...pikachuData}/>
             <PokemonCards {...eeveeData} />
              <PokemonCards {...vaporeonData}/>
               <PokemonCards {...bulbasaurData}/>
                <PokemonCards {...frogadierData}/>
                 <PokemonCards {...beedrillData}/>
       
      </ScrollView> 


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop:StatusBar.currentHeight,
    alignItems: "center"
  },



  text: {
    backgroundColor: Platform.OS === "ios" ? "red" : "lightpink"
  }
});