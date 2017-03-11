import os
__dirname = os.path.dirname(os.path.abspath( __file__ ))
import numpy as np
from scipy import *
from sklearn.model_selection import train_test_split as tts
from sklearn.metrics import confusion_matrix as cfm
from sklearn import svm
from sklearn.externals import joblib

price = np.loadtxt(__dirname + "/../Data/data_[BTC_ETH]_[10]_[rdp]_[fee_25].txt")

_x = price[:, :12]
_y = price[:, 12]

up = 0
down = 0
for i in _y:
	if i == 1:
		up = up + 1
	else:
		down = down + 1
print [down, up]

x = np.multiply(_x, 1000)
y = _y

x_train, x_test, y_train, y_test = tts(x, y, test_size = 0.3, random_state = 0)

# USED TO PRODUCT
# clf = svm.SVC(kernel='linear', C=1, probability=True) # Accu = 0.701424422625
# clf = svm.SVC(kernel='rbf', C=1) # Accu = 0.683169686074
clf = svm.SVC(kernel='poly', C=1, degree=2) # Acc = 0.712211312405
# clf = svm.SVC(kernel='poly', C=1, degree=3) # Acc = 0.712211312405

# USED TO TEST
# clf = svm.SVC(kernel='linear')
# clf = svm.SVC(kernel='linear', class_weight={1: 7}) # Accu = 0.701424422625
# clf = svm.SVC(kernel='rbf', C=1)

clf.fit(x_train, y_train)

print clf.get_params()
# exam = [[0, 0.0036666219753314247, -0.000042980800292559976, -0.0005301155192231367, 0.0018695799805052544, 0.0018695839444240353, 0.00578698133881232, 0.0053329615312655565, 0.00399293220429847, 0.0048225238776601256, 0.023340952547084213, 0.023340952547084213, 1]]
# print clf.predict(exam)

# Validation
print clf.score(x_test, y_test)

# Confusion matrix
y_pred = clf.predict(x_test)
print cfm(y_test, y_pred, labels=[0., 1.])

# joblib.dump(clf, '/home/nani/Desktop/Project/App/server/mysite/core/svm_[fee].pkl')
# to load model
# clf = joblib.load('/home/nani/Desktop/Project/App/server/mysite/core/svm.pkl')
# print clf.score(x_valid, y_valid)