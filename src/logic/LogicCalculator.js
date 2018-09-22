export default function LogicCalculator(total, element) {
    if (element == "Clear") {
        return 0;
    } else if (element == "=") {
        var x = solucao(total)
        return x
    }
    return total
}
function solucao(element) {
    var x = eval(element);
    return x;
}