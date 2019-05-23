import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Font } from '@gl/style/variables';
import {
    Dimensions
} from 'react-native';

const $textTitle = {
    ...Font.common,
    color: Colors.black
};

export default EStyleSheet.create({
    container: {
        backgroundColor: Colors.normal,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        ...$textTitle,
        // fontWeight:'bold'
    }
});