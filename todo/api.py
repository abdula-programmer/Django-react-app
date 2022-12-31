from .models import Todo
from rest_framework import viewsets, permissions
from .serializer import TodoSerializers


class TodoViewSet(viewsets.ModelViewSet):
   queryset = Todo.objects.all()
   permission_classes = [
      permissions.AllowAny
   ]
   serializer_class = TodoSerializers
   