import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href="/modal/modal-window" className='mx-4'>
        <ThemedText type="h2" className="">
          Abrir Modal
        </ThemedText>
      </Link>

      <ThemedButton 
        onPress={() => router.push('/modal/modal-window')}
      >
        Abrir Modal
      </ThemedButton>

    </ThemedView>
  );
};
export default ModalScreen;
