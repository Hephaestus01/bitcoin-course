import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Svg, {
  Defs,
  ClipPath,
  Path,
  LinearGradient,
  Stop,
  G,
} from "react-native-svg";

function SvgComponent() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      viewBox="0 0 600 2250.000011"
      height={3000}
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M.133 0h599.734v2249H.133zm0 0" />
        </ClipPath>
        <LinearGradient
          x1={0}
          gradientTransform="matrix(.74967 0 0 .74967 .133 0)"
          y1={0}
          x2={0}
          gradientUnits="userSpaceOnUse"
          y2={2999.999875}
          id="b"
        >
          <Stop stopColor="#F6ECC8" offset={0} />
          <Stop stopColor="#F6ECC9" offset={0.00390625} />
          <Stop stopColor="#F6EBC9" offset={0.0078125} />
          <Stop stopColor="#F6EBCA" offset={0.0117188} />
          <Stop stopColor="#F6EBCB" offset={0.015625} />
          <Stop stopColor="#F6EACC" offset={0.0195312} />
          <Stop stopColor="#F6EACC" offset={0.0234375} />
          <Stop stopColor="#F6EACD" offset={0.0273438} />
          <Stop stopColor="#F7E9CE" offset={0.03125} />
          <Stop stopColor="#F7E9CF" offset={0.0351562} />
          <Stop stopColor="#F7E9CF" offset={0.0390625} />
          <Stop stopColor="#F7E8D0" offset={0.0429688} />
          <Stop stopColor="#F7E8D1" offset={0.046875} />
          <Stop stopColor="#F7E8D2" offset={0.0507812} />
          <Stop stopColor="#F7E7D2" offset={0.0546875} />
          <Stop stopColor="#F7E7D3" offset={0.0585938} />
          <Stop stopColor="#F7E7D4" offset={0.0625} />
          <Stop stopColor="#F7E6D5" offset={0.0664062} />
          <Stop stopColor="#F7E6D5" offset={0.0703125} />
          <Stop stopColor="#F7E6D6" offset={0.0742188} />
          <Stop stopColor="#F7E5D7" offset={0.078125} />
          <Stop stopColor="#F7E5D8" offset={0.0820312} />
          <Stop stopColor="#F7E5D8" offset={0.0859375} />
          <Stop stopColor="#F7E4D9" offset={0.0898438} />
          <Stop stopColor="#F8E4DA" offset={0.09375} />
          <Stop stopColor="#F8E4DB" offset={0.0976562} />
          <Stop stopColor="#F8E3DB" offset={0.101562} />
          <Stop stopColor="#F8E3DC" offset={0.105469} />
          <Stop stopColor="#F8E3DD" offset={0.109375} />
          <Stop stopColor="#F8E2DE" offset={0.113281} />
          <Stop stopColor="#F8E2DF" offset={0.117188} />
          <Stop stopColor="#F8E2DF" offset={0.121094} />
          <Stop stopColor="#F8E1E0" offset={0.125} />
          <Stop stopColor="#F8E1E1" offset={0.128906} />
          <Stop stopColor="#F8E1E2" offset={0.132812} />
          <Stop stopColor="#F8E0E2" offset={0.136719} />
          <Stop stopColor="#F8E0E3" offset={0.140625} />
          <Stop stopColor="#F8E0E4" offset={0.144531} />
          <Stop stopColor="#F8DFE5" offset={0.148438} />
          <Stop stopColor="#F8DFE5" offset={0.152344} />
          <Stop stopColor="#F8DFE6" offset={0.15625} />
          <Stop stopColor="#F9DEE7" offset={0.160156} />
          <Stop stopColor="#F9DEE8" offset={0.164062} />
          <Stop stopColor="#F9DEE8" offset={0.167969} />
          <Stop stopColor="#F9DDE9" offset={0.171875} />
          <Stop stopColor="#F9DDEA" offset={0.175781} />
          <Stop stopColor="#F9DDEB" offset={0.179688} />
          <Stop stopColor="#F9DDEB" offset={0.183594} />
          <Stop stopColor="#F9DCEC" offset={0.1875} />
          <Stop stopColor="#F9DCED" offset={0.191406} />
          <Stop stopColor="#F9DCEE" offset={0.195312} />
          <Stop stopColor="#F9DBEE" offset={0.199219} />
          <Stop stopColor="#F9DBEF" offset={0.203125} />
          <Stop stopColor="#F9DBF0" offset={0.207031} />
          <Stop stopColor="#F9DAF1" offset={0.210938} />
          <Stop stopColor="#F9DAF1" offset={0.214844} />
          <Stop stopColor="#F9DAF2" offset={0.21875} />
          <Stop stopColor="#F9D9F3" offset={0.222656} />
          <Stop stopColor="#FAD9F4" offset={0.226562} />
          <Stop stopColor="#FAD9F4" offset={0.230469} />
          <Stop stopColor="#FAD8F5" offset={0.234375} />
          <Stop stopColor="#FAD8F6" offset={0.238281} />
          <Stop stopColor="#FAD8F7" offset={0.242188} />
          <Stop stopColor="#FAD7F7" offset={0.246094} />
          <Stop stopColor="#FAD7F8" offset={0.25} />
          <Stop stopColor="#F9D7F8" offset={0.253906} />
          <Stop stopColor="#F9D8F8" offset={0.257812} />
          <Stop stopColor="#F8D8F8" offset={0.261719} />
          <Stop stopColor="#F7D9F8" offset={0.265625} />
          <Stop stopColor="#F7D9F8" offset={0.269531} />
          <Stop stopColor="#F6D9F8" offset={0.273438} />
          <Stop stopColor="#F5DAF8" offset={0.277344} />
          <Stop stopColor="#F5DAF8" offset={0.28125} />
          <Stop stopColor="#F4DAF8" offset={0.285156} />
          <Stop stopColor="#F3DBF8" offset={0.289062} />
          <Stop stopColor="#F3DBF8" offset={0.292969} />
          <Stop stopColor="#F2DCF8" offset={0.296875} />
          <Stop stopColor="#F1DCF8" offset={0.300781} />
          <Stop stopColor="#F1DCF9" offset={0.304688} />
          <Stop stopColor="#F0DDF9" offset={0.308594} />
          <Stop stopColor="#EFDDF9" offset={0.3125} />
          <Stop stopColor="#EFDEF9" offset={0.316406} />
          <Stop stopColor="#EEDEF9" offset={0.320312} />
          <Stop stopColor="#EDDEF9" offset={0.324219} />
          <Stop stopColor="#EDDFF9" offset={0.328125} />
          <Stop stopColor="#ECDFF9" offset={0.332031} />
          <Stop stopColor="#ECE0F9" offset={0.335938} />
          <Stop stopColor="#EBE0F9" offset={0.339844} />
          <Stop stopColor="#EAE0F9" offset={0.34375} />
          <Stop stopColor="#EAE1F9" offset={0.347656} />
          <Stop stopColor="#E9E1F9" offset={0.351562} />
          <Stop stopColor="#E8E2F9" offset={0.355469} />
          <Stop stopColor="#E8E2F9" offset={0.359375} />
          <Stop stopColor="#E7E2F9" offset={0.363281} />
          <Stop stopColor="#E6E3F9" offset={0.367188} />
          <Stop stopColor="#E6E3F9" offset={0.371094} />
          <Stop stopColor="#E5E3F9" offset={0.375} />
          <Stop stopColor="#E4E4F9" offset={0.378906} />
          <Stop stopColor="#E4E4F9" offset={0.382812} />
          <Stop stopColor="#E3E5F9" offset={0.386719} />
          <Stop stopColor="#E2E5F9" offset={0.390625} />
          <Stop stopColor="#E2E5F9" offset={0.394531} />
          <Stop stopColor="#E1E6F9" offset={0.398438} />
          <Stop stopColor="#E0E6F9" offset={0.402344} />
          <Stop stopColor="#E0E7F9" offset={0.40625} />
          <Stop stopColor="#DFE7F9" offset={0.410156} />
          <Stop stopColor="#DEE7F9" offset={0.414062} />
          <Stop stopColor="#DEE8F9" offset={0.417969} />
          <Stop stopColor="#DDE8F9" offset={0.421875} />
          <Stop stopColor="#DCE9F9" offset={0.425781} />
          <Stop stopColor="#DCE9F9" offset={0.429688} />
          <Stop stopColor="#DBE9F9" offset={0.433594} />
          <Stop stopColor="#DBEAF9" offset={0.4375} />
          <Stop stopColor="#DAEAF9" offset={0.441406} />
          <Stop stopColor="#D9EAFA" offset={0.445312} />
          <Stop stopColor="#D9EBFA" offset={0.449219} />
          <Stop stopColor="#D8EBFA" offset={0.453125} />
          <Stop stopColor="#D7ECFA" offset={0.457031} />
          <Stop stopColor="#D7ECFA" offset={0.460938} />
          <Stop stopColor="#D6ECFA" offset={0.464844} />
          <Stop stopColor="#D5EDFA" offset={0.46875} />
          <Stop stopColor="#D5EDFA" offset={0.472656} />
          <Stop stopColor="#D4EEFA" offset={0.476562} />
          <Stop stopColor="#D3EEFA" offset={0.480469} />
          <Stop stopColor="#D3EEFA" offset={0.484375} />
          <Stop stopColor="#D2EFFA" offset={0.488281} />
          <Stop stopColor="#D1EFFA" offset={0.492188} />
          <Stop stopColor="#D1F0FA" offset={0.496094} />
          <Stop stopColor="#D0F0FA" offset={0.5} />
          <Stop stopColor="#D0F0FA" offset={0.515625} />
          <Stop stopColor="#CFF1F9" offset={0.53125} />
          <Stop stopColor="#CFF1F9" offset={0.546875} />
          <Stop stopColor="#CEF1F8" offset={0.5625} />
          <Stop stopColor="#CEF2F8" offset={0.578125} />
          <Stop stopColor="#CDF2F7" offset={0.59375} />
          <Stop stopColor="#CDF2F7" offset={0.609375} />
          <Stop stopColor="#CCF3F6" offset={0.625} />
          <Stop stopColor="#CCF3F6" offset={0.640625} />
          <Stop stopColor="#CBF4F5" offset={0.65625} />
          <Stop stopColor="#CBF4F5" offset={0.671875} />
          <Stop stopColor="#CAF4F4" offset={0.6875} />
          <Stop stopColor="#CAF5F4" offset={0.703125} />
          <Stop stopColor="#C9F5F3" offset={0.71875} />
          <Stop stopColor="#C9F5F3" offset={0.734375} />
          <Stop stopColor="#C8F6F2" offset={0.75} />
          <Stop stopColor="#C5F6F2" offset={0.753906} />
          <Stop stopColor="#C2F6F1" offset={0.757812} />
          <Stop stopColor="#BFF6F1" offset={0.761719} />
          <Stop stopColor="#BCF5F0" offset={0.765625} />
          <Stop stopColor="#B9F5F0" offset={0.769531} />
          <Stop stopColor="#B6F5F0" offset={0.773438} />
          <Stop stopColor="#B3F5EF" offset={0.777344} />
          <Stop stopColor="#B0F5EF" offset={0.78125} />
          <Stop stopColor="#ADF5EE" offset={0.785156} />
          <Stop stopColor="#A9F5EE" offset={0.789062} />
          <Stop stopColor="#A6F4EE" offset={0.792969} />
          <Stop stopColor="#A3F4ED" offset={0.796875} />
          <Stop stopColor="#A0F4ED" offset={0.800781} />
          <Stop stopColor="#9DF4ED" offset={0.804688} />
          <Stop stopColor="#9AF4EC" offset={0.808594} />
          <Stop stopColor="#97F4EC" offset={0.8125} />
          <Stop stopColor="#94F4EB" offset={0.816406} />
          <Stop stopColor="#91F3EB" offset={0.820312} />
          <Stop stopColor="#8EF3EB" offset={0.824219} />
          <Stop stopColor="#8BF3EA" offset={0.828125} />
          <Stop stopColor="#88F3EA" offset={0.832031} />
          <Stop stopColor="#85F3E9" offset={0.835938} />
          <Stop stopColor="#82F3E9" offset={0.839844} />
          <Stop stopColor="#7FF3E9" offset={0.84375} />
          <Stop stopColor="#7CF2E8" offset={0.847656} />
          <Stop stopColor="#79F2E8" offset={0.851562} />
          <Stop stopColor="#76F2E7" offset={0.855469} />
          <Stop stopColor="#73F2E7" offset={0.859375} />
          <Stop stopColor="#70F2E7" offset={0.863281} />
          <Stop stopColor="#6DF2E6" offset={0.867188} />
          <Stop stopColor="#6AF2E6" offset={0.871094} />
          <Stop stopColor="#67F1E5" offset={0.875} />
          <Stop stopColor="#63F1E5" offset={0.878906} />
          <Stop stopColor="#60F1E5" offset={0.882812} />
          <Stop stopColor="#5DF1E4" offset={0.886719} />
          <Stop stopColor="#5AF1E4" offset={0.890625} />
          <Stop stopColor="#57F1E4" offset={0.894531} />
          <Stop stopColor="#54F1E3" offset={0.898438} />
          <Stop stopColor="#51F0E3" offset={0.902344} />
          <Stop stopColor="#4EF0E2" offset={0.90625} />
          <Stop stopColor="#4BF0E2" offset={0.910156} />
          <Stop stopColor="#48F0E2" offset={0.914062} />
          <Stop stopColor="#45F0E1" offset={0.917969} />
          <Stop stopColor="#42F0E1" offset={0.921875} />
          <Stop stopColor="#3FF0E0" offset={0.925781} />
          <Stop stopColor="#3CEFE0" offset={0.929688} />
          <Stop stopColor="#39EFE0" offset={0.933594} />
          <Stop stopColor="#36EFDF" offset={0.9375} />
          <Stop stopColor="#33EFDF" offset={0.941406} />
          <Stop stopColor="#30EFDE" offset={0.945312} />
          <Stop stopColor="#2DEFDE" offset={0.949219} />
          <Stop stopColor="#2AEFDE" offset={0.953125} />
          <Stop stopColor="#27EEDD" offset={0.957031} />
          <Stop stopColor="#24EEDD" offset={0.960938} />
          <Stop stopColor="#20EEDD" offset={0.964844} />
          <Stop stopColor="#1DEEDC" offset={0.96875} />
          <Stop stopColor="#1AEEDC" offset={0.972656} />
          <Stop stopColor="#17EEDB" offset={0.976562} />
          <Stop stopColor="#14EEDB" offset={0.980469} />
          <Stop stopColor="#11EDDB" offset={0.984375} />
          <Stop stopColor="#0EEDDA" offset={0.988281} />
          <Stop stopColor="#0BEDDA" offset={0.992188} />
          <Stop stopColor="#08EDD9" offset={0.996094} />
          <Stop stopColor="#05EDD9" offset={1} />
        </LinearGradient>
      </Defs>
      <G clipPath="url(#a)">
        <Path fill="#fff" d="M.133 0h599.734v2256.496H.133zm0 0" />
        <Path fill="#fff" d="M.133 0h599.734v2249H.133zm0 0" />
        <Path fill="url(#b)" d="M.133 0v2249h599.734V0zm0 0" />
      </G>
    </Svg>
  );
}

const SvgBackground = ({ bgHeight }) => {
  return (
    <View style={[styles.container, {height: bgHeight}]}>
      <SvgComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  content: {
    flex: 1,
  },
});

export default SvgBackground;