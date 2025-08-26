import { MainLayout } from '@/components/layout/MainLayout'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { AssetList } from '@/components/assets/AssetList'
import { CreateAssetButton } from '@/components/assets/CreateAssetButton'

export default function AssetsPage() {
  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Assets</h1>
              <p className="text-gray-600 mt-2">
                Manage hardware and software assets
              </p>
            </div>
            <CreateAssetButton />
          </div>
          
          <AssetList />
        </div>
      </MainLayout>
    </ProtectedRoute>
  )
}
