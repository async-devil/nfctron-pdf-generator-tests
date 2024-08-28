import * as React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
      fontWeight: 300,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
      fontWeight: 400,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
      fontWeight: 500,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: 600,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    fontFamily: "Roboto",
  },
  header: {
    fontWeight: "bold",
    fontSize: "10px",
  },
});

// Create Document Component
export const SampleDocument = () => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View
        style={{
          width: "80%",
          height: "200px",
          marginHorizontal: "auto",
          marginTop: "5px",
          padding: "5px",
          border: "2px solid darkblue",
          borderRadius: "20px",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: "5px",
          }}
        >
          <Image
            src="https://placehold.co/100.png"
            style={{
              objectFit: "none",
            }}
          ></Image>
          <View
            style={{
              marginVertical: "auto",
              fontSize: "15px",
            }}
          >
            <Text>Pomocná společnost</Text>
            <Text style={{ fontWeight: "bold", fontSize: "20px" }}>
              Den otevřených dveří
            </Text>
            <Text>8. 6. 2023 - 8. 6. 2024</Text>
            <Text>Prague</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: "10px",
            marginLeft: '20px',
            paddingBottom: "10px",
          }}
        >
          <View>
            <Text style={styles.header}>Držitel vstupenky</Text>
            <Text>Test Testovácí</Text>
          </View>
          <View>
            <Text style={styles.header}>Vstupenka</Text>
            <Text>Partnerský vstup</Text>
          </View>
          <View>
            <Text style={styles.header}>Cena</Text>
            <Text>250,00 Kč</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
