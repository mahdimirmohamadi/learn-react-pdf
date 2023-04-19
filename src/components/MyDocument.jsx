import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    gap: 50,
    backgroundColor: "white",
    color: "black",
    padding: 20,
    border: 10,
    // borderWidth: "5 px",
  },
  section: {
    // margin: 5,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

const example = [
  {
    week: 1,
    read: "IELTS",
    done: false,
  },
  {
    week: 2,
    read: "Termic",
    done: true,
  },
];

// Create Document Component
function BasicDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          {example.map((Iweek) => {
            return (
              <View key={Iweek.week}>
                <Text>{Iweek.week}</Text>
                <Text>{Iweek.read}</Text>
                <Text>{JSON.stringify(Iweek.done)}</Text>
              </View>
            );
          })}
          <View style={styles.section}>
            <Text>World</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
