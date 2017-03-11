import os
__dirname = os.path.dirname(os.path.abspath( __file__ ))
import numpy as np
from scipy import *
from sklearn.model_selection import train_test_split as tts
from sklearn import neighbors
from sklearn.metrics import confusion_matrix as cfm


n_neighbors = 1

price = np.loadtxt(__dirname + "/../Data/data_[BTC_ETH]_[10]_[rdp]_[fee_25].txt")
# valid = np.loadtxt("/home/nani/Desktop/Project/Data/newest.txt")


_x = price[:, :12]
_y = price[:, 12]

# x_valid = valid[:, :12]
# y_valid = valid[:, 12]

x = np.multiply(_x, 1000)
y = _y

x_train, x_test, y_train, y_test = tts(x, y, test_size = 0.3, random_state = 0)

# we create an instance of Neighbours Classifier and fit the data.
weights = 'uniform' # 'distance'
clf = neighbors.KNeighborsClassifier(n_neighbors, weights=weights)
clf.fit(x_train, y_train)

# exam = [[613.31138699, 613.61000001, 613.61000063, 613.61000002, 615.22099999, 615.66734371, 615.00586058, 613.80000374, 613.62000032, 613.62000032, 13.099278411195591, 0.0005031919128628587]]
# print clf.predict(exam)
# print clf.predict_proba(exam)

print clf.score(x_test, y_test)
# print clf.score(x_valid, y_valid)

y_pred = clf.predict(x_test)
print cfm(y_test, y_pred, labels=[0., 1.])