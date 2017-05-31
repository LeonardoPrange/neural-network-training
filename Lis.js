var synaptic = require('synaptic');

var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

function Perceptron(input, hidden, output) {
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    this.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
}

Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;

var qtyInput = 4;
var qtySample = 100;
var qtyOutput = 3;
var qtyHidden = 10;

var myPerceptron = new Perceptron(qtyInput, qtyHidden, qtyOutput);
var myTrainer = new Trainer(myPerceptron);

//Pos 1 = Setosa
//Pos 2 = Versicolor
//Pos 3 = Virginia

var trainingSet = [
    { input: [4.8, 3.1, 1.6, 0.2], output: [1, 0, 0] },
    { input: [5.5, 2.4, 3.8, 1.1], output: [0, 1, 0] },
    { input: [7.4, 2.8, 6.1, 1.9], output: [0, 0, 1] },
    { input: [5.4, 3.4, 1.5, 0.4], output: [1, 0, 0] },
    { input: [5.5, 2.4, 3.7, 1.0], output: [0, 1, 0] },
    { input: [7.9, 3.8, 6.4, 2.0], output: [0, 0, 1] },
    { input: [5.2, 4.1, 1.5, 0.1], output: [1, 0, 0] },
    { input: [5.8, 2.7, 3.9, 1.2], output: [0, 1, 0] },
    { input: [6.4, 2.8, 5.6, 2.2], output: [0, 0, 1] },
    { input: [5.5, 4.2, 1.4, 0.2], output: [1, 0, 0] },
    { input: [6.0, 2.7, 5.1, 1.6], output: [0, 1, 0] },
    { input: [6.3, 2.8, 5.1, 1.5], output: [0, 0, 1] },
    { input: [4.9, 3.1, 1.5, 0.2], output: [1, 0, 0] },
    { input: [5.4, 3.0, 4.5, 1.5], output: [0, 1, 0] },
    { input: [6.1, 2.6, 5.6, 1.4], output: [0, 0, 1] },
    { input: [5.0, 3.2, 1.2, 0.2], output: [1, 0, 0] },
    { input: [6.0, 3.4, 4.5, 1.6], output: [0, 1, 0] },
    { input: [7.7, 3.0, 6.1, 2.3], output: [0, 0, 1] },
    { input: [5.5, 3.5, 1.3, 0.2], output: [1, 0, 0] },
    { input: [6.7, 3.1, 4.7, 1.5], output: [0, 1, 0] },
    { input: [6.3, 3.4, 5.6, 2.4], output: [0, 0, 1] },
    { input: [4.9, 3.6, 1.4, 0.1], output: [1, 0, 0] },
    { input: [6.3, 2.3, 4.4, 1.3], output: [0, 1, 0] },
    { input: [6.4, 3.1, 5.5, 1.8], output: [0, 0, 1] },
    { input: [4.4, 3.0, 1.3, 0.2], output: [1, 0, 0] },
    { input: [5.6, 3.0, 4.1, 1.3], output: [0, 1, 0] },
    { input: [6.0, 3.0, 4.8, 1.8], output: [0, 0, 1] },
    { input: [5.1, 3.4, 1.5, 0.2], output: [1, 0, 0] },
    { input: [5.5, 2.5, 4.0, 1.3], output: [0, 1, 0] },
    { input: [6.9, 3.1, 5.4, 2.1], output: [0, 0, 1] },
    { input: [5.0, 3.5, 1.3, 0.3], output: [1, 0, 0] },
    { input: [5.5, 2.6, 4.4, 1.2], output: [0, 1, 0] },
    { input: [6.7, 3.1, 5.6, 2.4], output: [0, 0, 1] },
    { input: [4.5, 2.3, 1.3, 0.3], output: [1, 0, 0] },
    { input: [6.1, 3.0, 4.6, 1.4], output: [0, 1, 0] },
    { input: [6.9, 3.1, 5.1, 2.3], output: [0, 0, 1] },
    { input: [4.4, 3.2, 1.3, 0.2], output: [1, 0, 0] },
    { input: [5.8, 2.6, 4.0, 1.2], output: [0, 1, 0] },
    { input: [5.8, 2.7, 5.1, 1.9], output: [0, 0, 1] },
    { input: [5.0, 3.5, 1.6, 0.6], output: [1, 0, 0] },
    { input: [5.0, 2.3, 3.3, 1.0], output: [0, 1, 0] },
    { input: [6.8, 3.2, 5.9, 2.3], output: [0, 0, 1] },
    { input: [5.1, 3.8, 1.9, 0.4], output: [1, 0, 0] },
    { input: [5.6, 2.7, 4.2, 1.3], output: [0, 1, 0] },
    { input: [6.7, 3.3, 5.7, 2.5], output: [0, 0, 1] },
    { input: [4.8, 3.0, 1.4, 0.3], output: [1, 0, 0] },
    { input: [5.7, 3.0, 4.2, 1.2], output: [0, 1, 0] },
    { input: [6.7, 3.0, 5.2, 2.3], output: [0, 0, 1] },
    { input: [5.1, 3.8, 1.6, 0.2], output: [1, 0, 0] },
    { input: [5.7, 2.9, 4.2, 1.3], output: [0, 1, 0] },
    { input: [6.3, 2.5, 5.0, 1.9], output: [0, 0, 1] },
    { input: [4.6, 3.2, 1.4, 0.2], output: [1, 0, 0] },
    { input: [6.2, 2.9, 4.3, 1.3], output: [0, 1, 0] },
    { input: [6.5, 3.0, 5.2, 2.0], output: [0, 0, 1] },
    { input: [5.3, 3.7, 1.5, 0.2], output: [1, 0, 0] },
    { input: [5.1, 2.5, 3.0, 1.1], output: [0, 1, 0] },
    { input: [6.2, 3.4, 5.4, 2.3], output: [0, 0, 1] },
    { input: [5.0, 3.3, 1.4, 0.2], output: [1, 0, 0] },
    { input: [5.7, 2.8, 4.1, 1.3], output: [0, 1, 0] },
    { input: [5.9, 3.0, 5.1, 1.8], output: [0, 0, 1] },
    { input: [5.1, 3.5, 1.4, 0.2], output: [1, 0, 0] },
    { input: [7.0, 3.2, 4.7, 1.4], output: [0, 1, 0] },
    { input: [6.3, 3.3, 6.0, 2.5], output: [0, 0, 1] },
    { input: [4.9, 3.0, 1.4, 0.2], output: [1, 0, 0] },
    { input: [6.4, 3.2, 4.5, 1.5], output: [0, 1, 0] },
    { input: [5.8, 2.7, 5.1, 1.9], output: [0, 0, 1] },
    { input: [4.7, 3.2, 1.3, 0.2], output: [1, 0, 0] },
    { input: [6.9, 3.1, 4.9, 1.5], output: [0, 1, 0] },
    { input: [7.1, 3.0, 5.9, 2.1], output: [0, 0, 1] },
    { input: [4.6, 3.1, 1.5, 0.2], output: [1, 0, 0] },
    { input: [5.5, 2.3, 4.0, 1.3], output: [0, 1, 0] },
    { input: [6.3, 2.9, 5.6, 1.8], output: [0, 0, 1] },
    { input: [5.0, 3.6, 1.4, 0.2], output: [1, 0, 0] },
    { input: [6.5, 2.8, 4.6, 1.5], output: [0, 1, 0] },
    { input: [6.5, 3.0, 5.8, 2.2], output: [0, 0, 1] },
    { input: [5.4, 3.9, 1.7, 0.4], output: [1, 0, 0] },
    { input: [5.7, 2.8, 4.5, 1.3], output: [0, 1, 0] },
    { input: [7.6, 3.0, 6.6, 2.1], output: [0, 0, 1] },
    { input: [4.6, 3.4, 1.4, 0.3], output: [1, 0, 0] },
    { input: [6.3, 3.3, 4.7, 1.6], output: [0, 1, 0] },
    { input: [4.9, 2.5, 4.5, 1.7], output: [0, 0, 1] },
    { input: [5.0, 3.4, 1.5, 0.2], output: [1, 0, 0] },
    { input: [4.9, 2.4, 3.3, 1.0], output: [0, 1, 0] },
    { input: [7.3, 2.9, 6.3, 1.8], output: [0, 0, 1] },
    { input: [4.4, 2.9, 1.4, 0.2], output: [1, 0, 0] },
    { input: [6.6, 2.9, 4.6, 1.3], output: [0, 1, 0] },
    { input: [6.7, 2.5, 5.8, 1.8], output: [0, 0, 1] },
    { input: [4.9, 3.1, 1.5, 0.1], output: [1, 0, 0] },
    { input: [5.2, 2.7, 3.9, 1.4], output: [0, 1, 0] },
    { input: [7.2, 3.6, 6.1, 2.5], output: [0, 0, 1] },
    { input: [5.4, 3.7, 1.5, 0.2], output: [1, 0, 0] },
    { input: [5.0, 2.0, 3.5, 1.0], output: [0, 1, 0] },
    { input: [6.5, 3.2, 5.1, 2.0], output: [0, 0, 1] },
    { input: [4.8, 3.4, 1.6, 0.2], output: [1, 0, 0] },
    { input: [5.9, 3.0, 4.2, 1.5], output: [0, 1, 0] },
    { input: [6.4, 2.7, 5.3, 1.9], output: [0, 0, 1] },
    { input: [4.8, 3.0, 1.4, 0.1], output: [1, 0, 0] },
    { input: [6.0, 2.2, 4.0, 1.0], output: [0, 1, 0] },
    { input: [6.8, 3.0, 5.5, 2.1], output: [0, 0, 1] },
    { input: [4.3, 3.0, 1.1, 0.1], output: [1, 0, 0] },
]

myTrainer.train(trainingSet, {
    rate: .05,
    iterations: 200,
    error: .1,
    log: 1,
    cost: Trainer.cost.CROSS_ENTROPY
});

console.log(myPerceptron.activate([6.1, 2.9, 4.7, 1.4])); // 101 Deu Bom    Versicolor

console.log(myPerceptron.activate([5.7, 2.5, 5.0, 2.0])); // 102 Deu Bom    Virginia

console.log(myPerceptron.activate([5.8, 4.0, 1.2, 0.2])); // 103 Deu Bom    Setosa