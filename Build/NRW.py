import os
__dirname = os.path.dirname(os.path.abspath( __file__ ))
import numpy as np
from scipy import *
from sklearn.model_selection import train_test_split as tts
from sklearn import neural_network
from sklearn.metrics import confusion_matrix as cfm
from sklearn.externals import joblib

price = np.loadtxt(__dirname + "/../Data/data_[BTC_ETH]_[10]_[nordp]_[fee_0].txt")

_x = price[:, :12]
_y = price[:, 12]

x = np.multiply(_x, 1000)
y = _y

x_train, x_test, y_train, y_test = tts(x, y, test_size = 0.3, random_state = 0)

clf = neural_network.MLPClassifier(solver="adam", hidden_layer_sizes=(100), activation="logistic", learning_rate_init=0.001)

clf.fit(x_train, y_train)

# exam = [[613.80000374, 613.62000032, 613.62000032, 610.7173605, 610.71736028, 610.71735995, 611.78917399, 611.65005205, 611.54168747, 611.028, 10.07706602390387, -0.004516135097930271]]
# print clf.predict(exam)

print clf.score(x_test, y_test)

y_pred = clf.predict(x_test)
print cfm(y_test, y_pred, labels=[0., 1.])

# joblib.dump(clf, '/home/nani/Desktop/Project/App/server/mysite/core/svm.pkl')