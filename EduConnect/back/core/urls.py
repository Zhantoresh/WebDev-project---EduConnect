from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from courses.views import MyTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'), # BE-6: Login endpoint using custom view for JWT
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), # BE-6: Standard endpoint for refreshing JWT tokens
    path('api/', include('courses.urls')), # FE-6: Including API routes from the 'courses' app
]