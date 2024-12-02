
import { StyleSheet, Text, View, Platform, Image } from 'react-native'

export const PokemonCards = ({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses

}) => {
    const getTypeEmoji = () => {
        switch (type.toLowerCase()) {
            case "electric":
              return { borderColor: "#FFD700", emoji: "⚡️" };
            case "water":
              return { borderColor: "#6493EA", emoji: "💧" };
            case "fire":
              return { borderColor: "#FF5733", emoji: "🔥" };
            case "grass":
              return { borderColor: "#66CC66", emoji: "🌿" };
            case "ground":
              return { borderColor: "#964B00", emoji: "⛰️" };
            case "psychic":
              return { borderColor: "#FFC0CB", emoji: "🔮" };
            case "flying":
              return { borderColor: "#FFD700", emoji: "🪽" };
            case "normal":
              return { borderColor: "#008000", emoji: "😐" };
            default:
              return 
        }      
    }

    const {emoji, borderColor} = getTypeEmoji();

  return (
    <View style={styles.container}>
        <View style={styles.box1}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.hp}>	&#9829;{hp}</Text>
        </View>

        <Image style={styles.image} source={image} accessibilityLabel={`${name} pokemon`} />

        <View style={[styles.box2, {borderColor}]}>
           
            <Text style={styles.typeText}>{emoji} {type}</Text>
        </View>

        <View>
            <Text style={styles.Moves}><Text style={styles.MoveTextTitle}>Moves:</Text> {moves.join(",")}</Text>
        </View>

        <View>
            <Text style={styles.Weakness}><Text style={styles.MoveTextTitle}>Weaknesses:</Text> {weaknesses.join(",")}</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      
        backgroundColor: "lightblue",
        marginVertical: "10%",
        paddingTop: 20,
        paddingHorizontal: 10,
        paddingBottom: 50,
        borderRadius: 15,
        borderWidth: 1,
        gap: 20,

        ...Platform.select({
            android: {
                elevation: 10
            },
            ios: {
             shadowOffset: {width: 2, height: 2},
             shadowColor: "#333",
             shadowOpacity: 0.3,
             shadowRadius: 4
            }
        })
        
    },
    image: {
        height: 200,
        width: "60%",
        marginTop: 20,
        alignSelf: "center"
    },
    box1: {
        
        gap: 8,
        flexDirection: "row",
        justifyContent: "space-between"
       
    },
    name: {
        fontWeight: "900",
        fontSize: 25,
       
    },
    hp: {
        fontSize: 20,
        fontWeight: "500"
    },
    box2: {
        borderWidth: 2,
        borderRadius: 10,
        alignItems: "center",
        padding: 5
    },
    MoveTextTitle: {
        fontSize: 17,
        fontWeight: "500",
    },
    
})